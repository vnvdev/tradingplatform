from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import pandas as pd

from main import main
from datetime import datetime
from tvDatafeed import TvDatafeed, Interval

tvusername = 'tugoftrades'
tvpassword = 'toc__123#'

tv = TvDatafeed(tvusername, tvpassword)

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
import pytz

tzinfo = pytz.timezone('Asia/kolkata')

def convert_dataframe(df):
    df = df.reset_index()
    df = df[['datetime', 'open', 'high', 'low', 'close']]
    df.columns = ['Time', 'Open', 'High', 'Low', 'Close']
    df['Time'] = df['Time'].apply(lambda x: datetime.timestamp(x))
    return df


@app.route('/history')
@cross_origin()
def history():
    symbol = request.args.get('symbol')
    tf = request.args.get('tf')
    dp = int(request.args.get('depth'))

    dataTD = tv.get_hist(symbol=symbol, interval=Interval(tf), n_bars=3000)
    tdf = convert_dataframe(dataTD)
    tdcandlesticks = tdf.to_numpy()

    tdfCandleSet = [{"time": data[0], "open": float(data[1]), "high": float(data[2]), "low": float(data[3]),
                       "close": float(data[4])} for data in tdcandlesticks]

    tdvdf = pd.DataFrame(tdf)
    a = main(tdvdf, dp)

    ms, bosLL, bosHH, zoneD, zoneS, impHH, impLL = [], [], [], [], [], [], []
    
    for x in a[1]:
        ms.append({'time': int(tdvdf.iloc[[x[0]]]['Time']), 'price': float(x[1])})

    for bos in a[6]:
        bosLL.append({'timeA': int(tdvdf.iloc[[bos[0]]]['Time']), 'price': float(bos[1]), 'timeB': int(tdvdf.iloc[[bos[2]]]['Time'])})

    for bos in a[5]:
        bosHH.append({'timeA': float(tdvdf.iloc[[bos[0]]]['Time']), 'price': float(bos[1]), 'timeB': float(tdvdf.iloc[[bos[2]]]['Time'])})

    for zone in a[3]:
        zoneD.append({'timeA': float(tdvdf.iloc[[zone[0]]]['Time']), 'priceA': float(zone[1]), 'timeB': float(tdvdf.iloc[[zone[2]]]['Time']), 'priceB': float(zone[3])})
        
    for zone in a[4]:
        zoneS.append({'timeA': float(tdvdf.iloc[[zone[0]]]['Time']), 'priceA': float(zone[1]), 'timeB': float(tdvdf.iloc[[zone[2]]]['Time']), 'priceB': float(zone[3])})

    for imp in a[9]:
        impHH.append({'timeA': float(tdvdf.iloc[[imp[0]]]['Time']), 'valueA': float(imp[1]), 'timeB': float(tdvdf.iloc[[imp[2]]]['Time']), 'valueB': float(imp[3])})

    for imp in a[10]:
        impLL.append({'timeA': float(tdvdf.iloc[[imp[0]]]['Time']), 'valueA': float(imp[1]), 'timeB': float(tdvdf.iloc[[imp[2]]]['Time']), 'valueB': float(imp[3])})

    return {"history": tdfCandleSet, "levels": ms, "bosLL": bosLL, "bosHH": bosHH, "zoneD": zoneD,"zoneS": zoneS, "impLL": impLL, "impHH": impHH}


@app.route('/')
def index():
    return 'Hello, world!'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=9000)
