# -*- coding: utf-8 -*-
from django.shortcuts import render
from sklearn import linear_model
from django.shortcuts import render
from django.http import JsonResponse
import pandas as pd
import math
import numpy
import statistics
from scipy import stats
import math
PATH=r'C:\Users\18521\Desktop\Visualization-master\Visualizations\Data'
# import math
def homei(request):
	return render(request, 'base.html')


def get_dataa(request):
    df_2017_CQ = pd.read_excel(PATH+'/2017/CQ.xlsx')
    df_2017_CQ=df_2017_CQ.drop(['Nhom Nganh'], axis=1)
    df_2017_CQ=df_2017_CQ.drop(['STT'], axis=1)

    df_2017_TXDot1 = pd.read_excel(PATH+'/2017/TX-Dot1.xlsx')
    df_2017_TXDot1=df_2017_TXDot1.drop(['STT'], axis=1)

    df_2017_TXDot2 = pd.read_excel(PATH+'/2017/TX-Dot2.xlsx')
    df_2017_TXDot2=df_2017_TXDot2.drop(['STT'], axis=1)

    df_2018_CQ = pd.read_excel(PATH+'/2018/CQ.xlsx')
    df_2018_CQ=df_2018_CQ.drop(['Nhom Nganh'], axis=1)
    df_2018_CQ=df_2018_CQ.drop(['STT'], axis=1)

    df_2018_CQSoluong = pd.read_excel(PATH+'/2018/CQSoluong.xlsx')

    df_2018_CQTheotinh = pd.read_excel(PATH+'/2018/CQTheotinh.xlsx')

    df_2018_Thacsi = pd.read_excel(PATH+'/2018/Thacsi.xlsx')
    df_2018_Thacsi=df_2018_Thacsi.drop(['STT'], axis=1)

    df_2018_TX = pd.read_excel(PATH+'/2018/TX.xlsx')
    df_2018_TX=df_2018_TX.drop(['STT'], axis=1)

    df_2018_TXDot1 = pd.read_excel(PATH+'/2018/TX-Dot1.xlsx')
    df_2018_TXDot1=df_2018_TXDot1.drop(['STT'], axis=1)

    df_2018_TXDot2 = pd.read_excel(PATH+'/2018/TX-Dot2.xlsx')
    df_2018_TXDot2=df_2018_TXDot2.drop(['STT'], axis=1)



    pearson_chitieu_diem_2017_CQ=float(stats.pearsonr(list(df_2017_CQ['Chitieu']),list(df_2017_CQ['Diemtrungtuyen']))[0])
    pearson_trungtuyen_diem_2017_CQ=float(stats.pearsonr(list(df_2017_CQ['Trungtuyen']),list(df_2017_CQ['Diemtrungtuyen']))[0])
    spearman_chitieu_diem_2017_CQ=float(stats.pearsonr(list(df_2017_CQ['Chitieu']),list(df_2017_CQ['Diemtrungtuyen']))[0])
    spearman_trungtuyen_diem_2017_CQ=float(stats.pearsonr(list(df_2017_CQ['Trungtuyen']),list(df_2017_CQ['Diemtrungtuyen']))[0])

    values=[]
    for index, value in enumerate(df_2017_CQ["Chitieu"]):
        if(int(value)==0):
            values.append(0)
        else:
            values.append(value*math.log10(value))
    df_2017_CQ["nlogn"]=values
    df_2017_CQ["n^2"]=pow(df_2017_CQ["Chitieu"].values,2)

    X = df_2017_CQ[["Chitieu","n^2","nlogn"]].astype(float) 
    Y = df_2017_CQ["Diemtrungtuyen"].astype(float)
    regr_df_2017_CQ_chitieu = linear_model.LinearRegression()
    regr_df_2017_CQ_chitieu.fit(X,Y)
    arr_2017_CQ_chitieu=regr_df_2017_CQ_chitieu.coef_
    b_2017_CQ_chitieu=regr_df_2017_CQ_chitieu.intercept_

    values=[]
    for index, value in enumerate(df_2017_CQ["Trungtuyen"]):
        if(int(value)==0):
            values.append(0)
        else:
            values.append(value*math.log10(value))
    df_2017_CQ["nlogn"]=values
    df_2017_CQ["n^2"]=pow(df_2017_CQ["Trungtuyen"].values,2)
    X = df_2017_CQ[["Trungtuyen","n^2","nlogn"]].astype(float) 
    Y = df_2017_CQ["Diemtrungtuyen"].astype(float)
    regr_df_2017_CQ_trungtuyen = linear_model.LinearRegression()
    regr_df_2017_CQ_trungtuyen.fit(X,Y)
    arr_2017_CQ_trungtuyen=regr_df_2017_CQ_trungtuyen.coef_
    b_2017_CQ_trungtuyen=regr_df_2017_CQ_trungtuyen.intercept_

    pearson_chitieu_diem_2018_CQ=float(stats.pearsonr(list(df_2018_CQ['Chitieu']),list(df_2018_CQ['Diemtrungtuyen']))[0])
    pearson_trungtuyen_diem_2018_CQ=float(stats.pearsonr(list(df_2018_CQ['Trungtuyen']),list(df_2018_CQ['Diemtrungtuyen']))[0])
    spearman_chitieu_diem_2018_CQ=float(stats.pearsonr(list(df_2018_CQ['Chitieu']),list(df_2018_CQ['Diemtrungtuyen']))[0])
    spearman_trungtuyen_diem_2018_CQ=float(stats.pearsonr(list(df_2018_CQ['Trungtuyen']),list(df_2018_CQ['Diemtrungtuyen']))[0])

    values=[]
    for index, value in enumerate(df_2018_CQ["Chitieu"]):
        if(int(value)==0):
            continue
        else:
            values.append(value*math.log10(value))
    df_2018_CQ["nlogn"]=values
    df_2018_CQ["n^2"]=pow(df_2018_CQ["Chitieu"].values,2)

    X = df_2018_CQ[["Chitieu","n^2","nlogn"]].astype(float) 
    Y = df_2018_CQ["Diemtrungtuyen"].astype(float)
    regr_df_2018_CQ_chitieu = linear_model.LinearRegression()
    regr_df_2018_CQ_chitieu.fit(X,Y)
    arr_2018_CQ_chitieu=regr_df_2018_CQ_chitieu.coef_
    b_2018_CQ_chitieu=regr_df_2018_CQ_chitieu.intercept_

    values=[]
    for index, value in enumerate(df_2018_CQ["Trungtuyen"]):
        if(int(value)==0):
            values.append(0)
        else:
            values.append(value*math.log10(value))
    df_2018_CQ["nlogn"]=values
    df_2018_CQ["n^2"]=pow(df_2017_CQ["Trungtuyen"].values,2)
    X = df_2018_CQ[["Trungtuyen","n^2","nlogn"]].astype(float) 
    Y = df_2018_CQ["Diemtrungtuyen"].astype(float)
    regr_df_2018_CQ_trungtuyen = linear_model.LinearRegression()
    regr_df_2018_CQ_trungtuyen.fit(X,Y)
    arr_2018_CQ_trungtuyen=regr_df_2018_CQ_trungtuyen.coef_
    b_2018_CQ_trungtuyen=regr_df_2018_CQ_trungtuyen.intercept_

    spearman_trungtuyen_diem_2017_d1=0
    pearson_trungtuyen_diem_2017_d1=0

    values=[]
    for index, value in enumerate(df_2017_TXDot1["Soluong"]):
        if(int(value)==0):
            values.append(0)
        else:
            values.append(value*math.log10(value))
    df_2017_TXDot1["nlogn"]=values
    df_2017_TXDot1["n^2"]=pow(df_2017_TXDot1["Soluong"].values,2)

    X = df_2017_TXDot1[["Soluong","n^2","nlogn"]].astype(float) 
    Y = df_2017_TXDot1["Diemtrungtuyen"].astype(float)
    regr_2017_TXDot1 = linear_model.LinearRegression()
    regr_2017_TXDot1.fit(X,Y)
    arr_2017_TXDot1=regr_2017_TXDot1.coef_
    b_2017_TXDot1=regr_2017_TXDot1.intercept_

    spearman_trungtuyen_diem_2017_d2=float(stats.spearmanr(list(df_2017_TXDot2['Diemtrungtuyen']),list(df_2017_TXDot2['Soluong']))[0])
    pearson_trungtuyen_diem_2017_d2=float(stats.pearsonr(list(df_2017_TXDot2['Diemtrungtuyen']),list(df_2017_TXDot2['Soluong']))[0])

    values=[]
    for index, value in enumerate(df_2017_TXDot2["Soluong"]):
        if(int(value)==0):
            values.append(0)
        else:
            values.append(value*math.log10(value))
    df_2017_TXDot2["nlogn"]=values
    df_2017_TXDot2["n^2"]=pow(df_2017_TXDot2["Soluong"].values,2)

    X = df_2017_TXDot2[["Soluong","n^2","nlogn"]].astype(float) 
    Y = df_2017_TXDot2["Diemtrungtuyen"].astype(float)
    regr_2017_TXDot2 = linear_model.LinearRegression()
    regr_2017_TXDot2.fit(X,Y)
    arr_2017_TXDot2=regr_2017_TXDot2.coef_
    b_2017_TXDot2=regr_2017_TXDot2.intercept_

    spearman_duthi_trungtuyen_2018_ch=float(stats.spearmanr(list(df_2018_Thacsi['Duthi']),list(df_2018_Thacsi['Trungtuyen']))[0])
    pearson_duthi_trungtuyen_2018_ch=float(stats.pearsonr(list(df_2018_Thacsi['Duthi']),list(df_2018_Thacsi['Trungtuyen']))[0])

    values=[]
    for index, value in enumerate(df_2018_Thacsi["Duthi"]):
        if(int(value)==0):
            values.append(0)
        else:
            values.append(value*math.log10(value))
    df_2018_Thacsi["nlogn"]=values
    df_2018_Thacsi["n^2"]=pow(df_2018_Thacsi["Duthi"].values,2)

    X = df_2018_Thacsi[["Duthi","n^2","nlogn"]].astype(float) 
    Y = df_2018_Thacsi["Trungtuyen"].astype(float)
    regr_2018_Thacsi = linear_model.LinearRegression()
    regr_2018_Thacsi.fit(X,Y)
    arr_2018_Thacsi=regr_2018_Thacsi.coef_
    b_2018_Thacsi=regr_2018_Thacsi.intercept_

    spearman_dangky_trungtuyen_2018_tinh=float(stats.spearmanr(list(df_2018_CQTheotinh['Soluong']),list(df_2018_CQTheotinh['Nhaphoc']))[0])
    pearson_dangky_trungtuyen_2018_tinh=float(stats.pearsonr(list(df_2018_CQTheotinh['Soluong']),list(df_2018_CQTheotinh['Nhaphoc']))[0])

    values=[]
    for index, value in enumerate(df_2018_CQTheotinh["Soluong"]):
        if(int(value)==0):
            values.append(0)
        else:
            values.append(value*math.log10(value))
    df_2018_CQTheotinh["nlogn"]=values
    df_2018_CQTheotinh["n^2"]=pow(df_2018_CQTheotinh["Soluong"].values,2)

    X = df_2018_CQTheotinh[["Soluong","n^2","nlogn"]].astype(float) 
    Y = df_2018_CQTheotinh["Nhaphoc"].astype(float)
    regr_2018_CQTheotinh = linear_model.LinearRegression()
    regr_2018_CQTheotinh.fit(X,Y)
    arr_2018_CQTheotinh=regr_2018_CQTheotinh.coef_
    b_2018_CQTheotinh=regr_2018_CQTheotinh.intercept_

    spearman_chitieu_nhaphoc_2018_cq=float(stats.spearmanr(list(df_2018_CQSoluong['Chitieu']),list(df_2018_CQSoluong['Nhaphoc']))[0])
    pearson_chitieu_nhaphoc_2018_cq=float(stats.pearsonr(list(df_2018_CQSoluong['Chitieu']),list(df_2018_CQSoluong['Nhaphoc']))[0])

    values=[]
    for index, value in enumerate(df_2018_CQSoluong["Chitieu"]):
        if(int(value)==0):
            values.append(0)
        else:
            values.append(value*math.log10(value))
    df_2018_CQSoluong["nlogn"]=values
    df_2018_CQSoluong["n^2"]=pow(df_2018_CQSoluong["Chitieu"].values,2)

    X = df_2018_CQSoluong[["Chitieu","n^2","nlogn"]].astype(float) 
    Y = df_2018_CQSoluong["Nhaphoc"].astype(float)
    regr_2018_CQSoluong = linear_model.LinearRegression()
    regr_2018_CQSoluong.fit(X,Y)
    arr_2018_CQSoluong=regr_2018_CQSoluong.coef_
    b_2018_CQSoluong=regr_2018_CQSoluong.intercept_




    data = {
        'sta': ['Min', 'Max', 'Sum', 'Count', 'Var', 'Std','Mean'],
        #cái này gồm 2 biểu đồ cột cho sta, 1 biểu đồ chỉ biểu diễn điểm, 1 biểu đồ biểu diễn chỉ tiêu và trúng tuyển, sau đó vẽ 3 biểu đồ tròn, 3 heat map, 1 tương quan 3 biến cho điểm, chỉ tiêu và trúng tuyển
        'nganh_2017_CQ': list(df_2017_CQ['Nganh']),
        'sta_chitieu_2017_CQ': [int(min(list(df_2017_CQ['Chitieu']))), int(max(list(df_2017_CQ['Chitieu']))), int(sum(list(df_2017_CQ['Chitieu']))), int(len(list(df_2017_CQ['Chitieu']))),round(statistics.variance(list(df_2017_CQ['Chitieu'])),2),round(statistics.stdev(list(df_2017_CQ['Chitieu'])),2),round(statistics.mean(list(df_2017_CQ['Chitieu'])),2)],
        'sta_trungtuyen_2017_CQ': [int(min(list(df_2017_CQ['Trungtuyen']))), int(max(list(df_2017_CQ['Trungtuyen']))), int(sum(list(df_2017_CQ['Trungtuyen']))), int(len(list(df_2017_CQ['Trungtuyen']))),round(statistics.variance(list(df_2017_CQ['Trungtuyen'])),2),round(statistics.stdev(list(df_2017_CQ['Trungtuyen'])),2),round(statistics.mean(list(df_2017_CQ['Trungtuyen'])),2)],
        'sta_diem_2017_CQ': [min(list(df_2017_CQ['Diemtrungtuyen'])), max(list(df_2017_CQ['Diemtrungtuyen'])), (sum(list(df_2017_CQ['Diemtrungtuyen']))), (len(list(df_2017_CQ['Diemtrungtuyen']))),round(statistics.variance(list(df_2017_CQ['Diemtrungtuyen'])),2),round(statistics.stdev(list(df_2017_CQ['Diemtrungtuyen'])),2),round(statistics.mean(list(df_2017_CQ['Diemtrungtuyen'])),2)],       
        'chitieu_2017_CQ': list(df_2017_CQ['Chitieu']),
        'trungtuyen_2017_CQ': list(df_2017_CQ['Trungtuyen']),
        'diem_2017_CQ': list(df_2017_CQ['Diemtrungtuyen']),
        'pearson_chitieu_diem_2017': pearson_chitieu_diem_2017_CQ,
        'pearson_trungtuyen_diem_2017': pearson_trungtuyen_diem_2017_CQ,
        'spearman_chitieu_diem_2017': spearman_chitieu_diem_2017_CQ,
        'spearman_trungtuyen_diem_2017': spearman_trungtuyen_diem_2017_CQ,
        #2 biểu đồ cột, 1 cái biểu diễn sta_diem, 1 cái sta_soluong, 2 biểu đồ tròn, 2 heatmap, 1 biểu đồ tương quan cho so lượng và điểm
        'nganh_2017_TXDot1': list(df_2017_TXDot1['Nganh']+"-"+df_2017_TXDot1['Hedaotao']+"-"+df_2017_TXDot1['Hinhthucdaotao']),
        'sta_diem_2017_TXDot1': [min(list(df_2017_TXDot1['Diemtrungtuyen'])), max(list(df_2017_TXDot1['Diemtrungtuyen'])), (sum(list(df_2017_TXDot1['Diemtrungtuyen']))), (len(list(df_2017_TXDot1['Diemtrungtuyen']))),round(statistics.variance(list(df_2017_TXDot1['Diemtrungtuyen'])),2),round(statistics.stdev(list(df_2017_TXDot1['Diemtrungtuyen'])),2),round(statistics.mean(list(df_2017_TXDot1['Diemtrungtuyen'])),2)],
        'diem_2017_TXDot1': list(df_2017_TXDot1['Diemtrungtuyen']),
        'sta_soluong_2017_TXDot1': [min(list(df_2017_TXDot1['Soluong'])), max(list(df_2017_TXDot1['Soluong'])), (sum(list(df_2017_TXDot1['Soluong']))), (len(list(df_2017_TXDot1['Soluong']))),round(statistics.variance(list(df_2017_TXDot1['Soluong'])),2),round(statistics.stdev(list(df_2017_TXDot1['Soluong'])),2),round(statistics.mean(list(df_2017_TXDot1['Soluong'])),2)],
        'soluong_2017_TXDot1': list(df_2017_TXDot1['Soluong']),
        'spearman_soluong_diem_2017_TXDot1': spearman_trungtuyen_diem_2017_d1,
        'pearson_soluong_diem_2017_TXDot1': pearson_trungtuyen_diem_2017_d1,
        #2 biểu đồ cột, 1 cái biểu diễn sta_diem, 1 cái sta_soluong, 2 biểu đồ tròn, 2 heatmap, 1 biểu đồ tương quan cho so lượng và điểm
        'nganh_2017_TXDot2': list(df_2017_TXDot2['Nganh']+"-"+df_2017_TXDot2['Hedaotao']+"-"+df_2017_TXDot2['Hinhthucdaotao']),
        'sta_diem_2017_TXDot2': [min(list(df_2017_TXDot2['Diemtrungtuyen'])), max(list(df_2017_TXDot2['Diemtrungtuyen'])), (sum(list(df_2017_TXDot2['Diemtrungtuyen']))), (len(list(df_2017_TXDot2['Diemtrungtuyen']))),round(statistics.variance(list(df_2017_TXDot2['Diemtrungtuyen'])),2),round(statistics.stdev(list(df_2017_TXDot2['Diemtrungtuyen'])),2),round(statistics.mean(list(df_2017_TXDot2['Diemtrungtuyen'])),2)],
        'diem_2017_TXDot2': list(df_2017_TXDot2['Diemtrungtuyen']),
        'sta_soluong_2017_TXDot2': [min(list(df_2017_TXDot2['Soluong'])), max(list(df_2017_TXDot2['Soluong'])), (sum(list(df_2017_TXDot2['Soluong']))), (len(list(df_2017_TXDot2['Soluong']))),round(statistics.variance(list(df_2017_TXDot2['Soluong'])),2),round(statistics.stdev(list(df_2017_TXDot2['Soluong'])),2),round(statistics.mean(list(df_2017_TXDot2['Soluong'])),2)],
        'soluong_2017_TXDot2': list(df_2017_TXDot2['Soluong']),
        'spearman_soluong_diem_2017_TXDot2': spearman_trungtuyen_diem_2017_d2,
        'pearson_soluong_diem_2017_TXDot2': pearson_trungtuyen_diem_2017_d2,
        #cái này gồm 2 biểu đồ cột cho sta, 1 biểu đồ chỉ biểu diễn điểm, 1 biểu đồ biểu diễn chỉ tiêu và trúng tuyển, sau đó vẽ 3 biểu đồ tròn, 3 heat map, 1 tương quan 3 biến cho điểm, chỉ tiêu và trúng tuyển
        'nganh_2018_CQ': list(df_2018_CQ['Nganh']),
        'sta_chitieu_2018_CQ': [int(min(list(df_2018_CQ['Chitieu']))), int(max(list(df_2018_CQ['Chitieu']))), int(sum(list(df_2018_CQ['Chitieu']))), int(len(list(df_2018_CQ['Chitieu']))),round(statistics.variance(list(df_2018_CQ['Chitieu'])),2),round(statistics.stdev(list(df_2018_CQ['Chitieu'])),2),round(statistics.mean(list(df_2018_CQ['Chitieu'])),2)],
        'sta_trungtuyen_2018_CQ': [int(min(list(df_2018_CQ['Trungtuyen']))), int(max(list(df_2018_CQ['Trungtuyen']))), int(sum(list(df_2018_CQ['Trungtuyen']))), int(len(list(df_2018_CQ['Trungtuyen']))),round(statistics.variance(list(df_2018_CQ['Trungtuyen'])),2),round(statistics.stdev(list(df_2018_CQ['Trungtuyen'])),2),round(statistics.mean(list(df_2018_CQ['Trungtuyen'])),2)],
        'sta_diem_2018_CQ': [min(list(df_2018_CQ['Diemtrungtuyen'])), max(list(df_2018_CQ['Diemtrungtuyen'])), (sum(list(df_2018_CQ['Diemtrungtuyen']))), (len(list(df_2018_CQ['Diemtrungtuyen']))),round(statistics.variance(list(df_2018_CQ['Diemtrungtuyen'])),2),round(statistics.stdev(list(df_2018_CQ['Diemtrungtuyen'])),2),round(statistics.mean(list(df_2018_CQ['Diemtrungtuyen'])),2)],       
        'chitieu_2018_CQ': list(df_2018_CQ['Chitieu']),
        'trungtuyen_2018_CQ': list(df_2018_CQ['Trungtuyen']),
        'diem_2018_CQ': list(df_2018_CQ['Diemtrungtuyen']),
        'pearson_chitieu_diem_2018': pearson_chitieu_diem_2017_CQ,
        'pearson_trungtuyen_diem_2018': pearson_trungtuyen_diem_2018_CQ,
        'spearman_chitieu_diem_2018': spearman_chitieu_diem_2018_CQ,
        'spearman_trungtuyen_diem_2018': spearman_trungtuyen_diem_2018_CQ,
        #1 biểu đồ cột cho tất cả sta, 5 biểu đồ tròn, 5 heatmap, 1 tương quan cho chi tieu và nhập học
        'nganh_2018_CQsoluong': list(df_2018_CQSoluong['Nganh']),
        'sta_chitieu_2018_CQsoluong': [int(min(list(df_2018_CQSoluong['Chitieu']))), int(max(list(df_2018_CQSoluong['Chitieu']))), int(sum(list(df_2018_CQSoluong['Chitieu']))), int(len(list(df_2018_CQSoluong['Chitieu']))),round(statistics.variance(list(df_2018_CQSoluong['Chitieu'])),2),round(statistics.stdev(list(df_2018_CQSoluong['Chitieu'])),2),round(statistics.mean(list(df_2018_CQSoluong['Chitieu'])),2)],
        'sta_dangky_2018_CQsoluong': [int(min(list(df_2018_CQSoluong['Dangky']))), int(max(list(df_2018_CQSoluong['Dangky']))), int(sum(list(df_2018_CQSoluong['Dangky']))), int(len(list(df_2018_CQSoluong['Dangky']))),round(statistics.variance(list(df_2018_CQSoluong['Dangky'])),2),round(statistics.stdev(list(df_2018_CQSoluong['Dangky'])),2),round(statistics.mean(list(df_2018_CQSoluong['Dangky'])),2)],
        'sta_dangkyNV1_2018_CQsoluong': [int(min(list(df_2018_CQSoluong['DangkyNV1']))), int(max(list(df_2018_CQSoluong['DangkyNV1']))), int(sum(list(df_2018_CQSoluong['DangkyNV1']))), int(len(list(df_2018_CQSoluong['DangkyNV1']))),round(statistics.variance(list(df_2018_CQSoluong['DangkyNV1'])),2),round(statistics.stdev(list(df_2018_CQSoluong['DangkyNV1'])),2),round(statistics.mean(list(df_2018_CQSoluong['DangkyNV1'])),2)],
        'sta_trungtuyen_2018_CQsoluong': [int(min(list(df_2018_CQSoluong['Trungtuyen']))), int(max(list(df_2018_CQSoluong['Trungtuyen']))), int(sum(list(df_2018_CQSoluong['Trungtuyen']))), int(len(list(df_2018_CQSoluong['Trungtuyen']))),round(statistics.variance(list(df_2018_CQSoluong['Trungtuyen'])),2),round(statistics.stdev(list(df_2018_CQSoluong['Trungtuyen'])),2),round(statistics.mean(list(df_2018_CQSoluong['Trungtuyen'])),2)],
        'sta_nhaphoc_2018_CQsoluong': [int(min(list(df_2018_CQSoluong['Nhaphoc']))), int(max(list(df_2018_CQSoluong['Nhaphoc']))), int(sum(list(df_2018_CQSoluong['Nhaphoc']))), int(len(list(df_2018_CQSoluong['Nhaphoc']))),round(statistics.variance(list(df_2018_CQSoluong['Nhaphoc'])),2),round(statistics.stdev(list(df_2018_CQSoluong['Nhaphoc'])),2),round(statistics.mean(list(df_2018_CQSoluong['Nhaphoc'])),2)],       
        'chitieu_2018_CQsoluong': list(df_2018_CQSoluong['Chitieu']),
        'dangky_2018_CQsoluong': list(df_2018_CQSoluong['Dangky']),
        'dangkyNV1_2018_CQsoluong': list(df_2018_CQSoluong['DangkyNV1']),
        'trungtuyen_2018_CQsoluong': list(df_2018_CQSoluong['Trungtuyen']),
        'nhaphoc_2018_CQsoluong': list(df_2018_CQSoluong['Nhaphoc']),
        'spearman_nhaphoc_chitieu_2018_CQsoluong': spearman_chitieu_nhaphoc_2018_cq,
        'pearson_nhaphoc_chitieu_2018_CQsoluong': pearson_chitieu_nhaphoc_2018_cq,
        #1 biểu đồ cột cho tất cả sta, 4 biểu đồ tròn, 4 heatmap, 1 tương quan cho dang ky và trung tuyen
        'tinh_2018_CQtheotinh': list(df_2018_CQTheotinh['Tinh']),
        'sta_soluong_2018_CQtheotinh': [int(min(list(df_2018_CQTheotinh['Soluong']))), int(max(list(df_2018_CQTheotinh['Soluong']))), int(sum(list(df_2018_CQTheotinh['Soluong']))), int(len(list(df_2018_CQTheotinh['Soluong']))),round(statistics.variance(list(df_2018_CQTheotinh['Soluong'])),2),round(statistics.stdev(list(df_2018_CQTheotinh['Soluong'])),2),round(statistics.mean(list(df_2018_CQTheotinh['Soluong'])),2)],
        'sta_dot1_2018_CQtheotinh': [int(min(list(df_2018_CQTheotinh['Dot1']))), int(max(list(df_2018_CQTheotinh['Dot1']))), int(sum(list(df_2018_CQTheotinh['Dot1']))), int(len(list(df_2018_CQTheotinh['Dot1']))),round(statistics.variance(list(df_2018_CQTheotinh['Dot1'])),2),round(statistics.stdev(list(df_2018_CQTheotinh['Dot1'])),2),round(statistics.mean(list(df_2018_CQTheotinh['Dot1'])),2)],
        'sta_dot2_2018_CQtheotinh': [int(min(list(df_2018_CQTheotinh['Dot2']))), int(max(list(df_2018_CQTheotinh['Dot2']))), int(sum(list(df_2018_CQTheotinh['Dot2']))), int(len(list(df_2018_CQTheotinh['Dot2']))),round(statistics.variance(list(df_2018_CQTheotinh['Dot2'])),2),round(statistics.stdev(list(df_2018_CQTheotinh['Dot2'])),2),round(statistics.mean(list(df_2018_CQTheotinh['Dot2'])),2)],
        'sta_nhaphoc_2018_CQtheotinh': [int(min(list(df_2018_CQTheotinh['Nhaphoc']))), int(max(list(df_2018_CQTheotinh['Nhaphoc']))), int(sum(list(df_2018_CQTheotinh['Nhaphoc']))), int(len(list(df_2018_CQTheotinh['Nhaphoc']))),round(statistics.variance(list(df_2018_CQTheotinh['Nhaphoc'])),2),round(statistics.stdev(list(df_2018_CQTheotinh['Nhaphoc'])),2),round(statistics.mean(list(df_2018_CQTheotinh['Nhaphoc'])),2)],    
        'soluong_2018_CQtheotinh': list(df_2018_CQTheotinh['Soluong']),
        'dot1_2018_CQtheotinh': list(df_2018_CQTheotinh['Dot1']),
        'dot2_2018_CQtheotinh': list(df_2018_CQTheotinh['Dot2']),
        'nhaphoc_2018_CQtheotinh': list(df_2018_CQTheotinh['Nhaphoc']),
        'spearman_nhaphoc_soluong_2018_CQtheotinh': spearman_dangky_trungtuyen_2018_tinh,
        'pearson_nhaphoc_soluong_2018_CQtheotinh': pearson_dangky_trungtuyen_2018_tinh,
        #1 biểu đồ cột cho 2 sta, 2 tròn, 2 heatmap, 1 tương quan cho du thi và trúng tuyển
        'nganh_2018_thacsi': list(df_2018_Thacsi['Nganh']),
        'sta_duthi_2018_thacsi': [min(list(df_2018_Thacsi['Duthi'])), max(list(df_2018_Thacsi['Duthi'])), (sum(list(df_2018_Thacsi['Duthi']))), (len(list(df_2018_Thacsi['Duthi']))),round(statistics.variance(list(df_2018_Thacsi['Duthi'])),2),round(statistics.stdev(list(df_2018_Thacsi['Duthi'])),2),round(statistics.mean(list(df_2018_Thacsi['Duthi'])),2)],
        'duthi_2018_thacsi': list(df_2018_Thacsi['Duthi']),
        'sta_trungtuyen_2018_thacsi': [min(list(df_2018_Thacsi['Trungtuyen'])), max(list(df_2018_Thacsi['Trungtuyen'])), (sum(list(df_2018_Thacsi['Trungtuyen']))), (len(list(df_2018_Thacsi['Trungtuyen']))),round(statistics.variance(list(df_2018_Thacsi['Trungtuyen'])),2),round(statistics.stdev(list(df_2018_Thacsi['Trungtuyen'])),2),round(statistics.mean(list(df_2018_Thacsi['Trungtuyen'])),2)],
        'trungtuyen_2018_thacsi': list(df_2018_Thacsi['Trungtuyen']),
        'spearman_trungtuyen_duthi_2018_thacsi': spearman_duthi_trungtuyen_2018_ch,
        'pearson_trungtuyen_duthi_2018_thacsi': pearson_duthi_trungtuyen_2018_ch,
        #1 cột, 1 tròn, 1 heatmap
        'nganh_2018_TX': list(df_2018_TX['Nganh']+"-"+df_2018_TX['Hedaotao']+"-"+df_2018_TX['Hinhthucdaotao']),
        'sta_soluong_2018_TX': [min(list(df_2018_TX['Soluong'])), max(list(df_2018_TX['Soluong'])), (sum(list(df_2018_TX['Soluong']))), (len(list(df_2018_TX['Soluong']))),round(statistics.variance(list(df_2018_TX['Soluong'])),2),round(statistics.stdev(list(df_2018_TX['Soluong'])),2),round(statistics.mean(list(df_2018_TX['Soluong'])),2)],
        'soluong_2018_TX': list(df_2018_TX['Soluong']),

        # 'nganh_2018_TX': list(df_2018_TX['Nganh']+"-"+df_2018_TX['Hedaotao']+"-"+df_2018_TX['Hinhthucdaotao']),
        # 'sta_soluong_2018_TX': [min(list(df_2018_TX['Soluong'])), max(list(df_2018_TX['Soluong'])), (sum(list(df_2018_TX['Soluong']))), (len(list(df_2018_TX['Soluong']))),round(statistics.variance(list(df_2018_TX['Soluong'])),2),round(statistics.stdev(list(df_2018_TX['Soluong'])),2),round(statistics.mean(list(df_2018_TX['Soluong'])),2)],
        # 'soluong_2018_TX': list(df_2018_TX['Soluong']),
        #1 cột, 1 tròn, 1 heatmap
        'nganh_2018_TXDot1': list(df_2018_TXDot1['Nganh']+"-"+df_2018_TXDot1['Hedaotao']+"-"+df_2018_TXDot1['Hinhthucdaotao']),
        'sta_soluong_2018_TXDot1': [min(list(df_2018_TXDot1['Soluong'])), max(list(df_2018_TXDot1['Soluong'])), (sum(list(df_2018_TXDot1['Soluong']))), (len(list(df_2018_TXDot1['Soluong']))),round(statistics.variance(list(df_2018_TXDot1['Soluong'])),2),round(statistics.stdev(list(df_2018_TXDot1['Soluong'])),2),round(statistics.mean(list(df_2018_TXDot1['Soluong'])),2)],
        'soluong_2018_TXDot1': list(df_2018_TXDot1['Soluong']),
        #1 cột, 1 tròn, 1 heatmap
        'nganh_2018_TXDot2': list(df_2018_TXDot2['Nganh']+"-"+df_2018_TXDot2['Hedaotao']+"-"+df_2018_TXDot2['Hinhthucdaotao']),
        'sta_soluong_2018_TXDot2': [min(list(df_2018_TXDot2['Soluong'])), max(list(df_2018_TXDot2['Soluong'])), (sum(list(df_2018_TXDot2['Soluong']))), (len(list(df_2018_TXDot2['Soluong']))),round(statistics.variance(list(df_2018_TXDot2['Soluong'])),2),round(statistics.stdev(list(df_2018_TXDot2['Soluong'])),2),round(statistics.mean(list(df_2018_TXDot2['Soluong'])),2)],
        'soluong_2018_TXDot2': list(df_2018_TXDot2['Soluong']),


        'arr_chitieu_2017_CQ': list(arr_2017_CQ_chitieu),
        'b_chitieu_2017_CQ': float(b_2017_CQ_chitieu),
        'arr_trungtuyen_2017_CQ': list(arr_2017_CQ_trungtuyen),
        'b_trungtuyen_2017_CQ': float(b_2017_CQ_trungtuyen),
        'arr_chitieu_2018_CQ': list(arr_2018_CQ_chitieu),
        'b_chitieu_2018_CQ': float(b_2018_CQ_chitieu),
        'arr_trungtuyen_2018_CQ': list(arr_2018_CQ_trungtuyen),
        'b_trungtuyen_2018_CQ': float(b_2018_CQ_trungtuyen),
        'arr_2017_TXDot1': list(arr_2017_TXDot1),
        'b_2017_TXDot1': float(b_2017_TXDot1),
        'arr_2017_TXDot2': list(arr_2017_TXDot2),
        'b_2017_TXDot2': float(b_2017_TXDot2),
        'arr_2018_thacsi':list(arr_2018_Thacsi),
        'b_2018_thacsi':float(b_2018_Thacsi),
        'arr_2018_CQtheotinh': list(arr_2018_CQTheotinh),
        'b_2018_CQtheotinh': float(b_2018_CQTheotinh),
        'arr_2018_CQsoluong': list(arr_2018_CQSoluong),
        'b_2018_CQsoluong': float(b_2018_CQSoluong),
    }
    return JsonResponse(data)