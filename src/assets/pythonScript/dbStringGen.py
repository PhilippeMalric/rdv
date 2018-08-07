tab = ["ZZ_Auto_MFE_All_Filter__0_90__noPred__A_0_5_S_1_0_stn_1_5_ed_20_0","ZZ_Auto_MFE_All_Filter__0_90__noPred__A_0_5_S_1_0_stn_1_5_ed_50_0","ZZ_Auto_MFE_All_Filter__0_90__noPred__A_0_5_S_1_0_stn_1_5_ed_5_0","ZZ_Auto_MFE_All_Filter__0_90__noPred__A_0_5_S_1_0_stn_6_0_ed_20_0","ZZ_Auto_MFE_All_Filter__0_90__noPred__A_0_5_S_1_0_stn_6_0_ed_50_0","ZZ_Auto_MFE_All_Filter__0_90__noPred__A_0_5_S_1_0_stn_6_0_ed_5_0","ZZ_Auto_MFE_All_Filter__0_90__noPred__A_0_5_S_1_5_stn_1_5_ed_20_0","ZZ_Auto_MFE_All_Filter__0_90__noPred__A_0_5_S_1_5_stn_1_5_ed_50_0","ZZ_Auto_MFE_All_Filter__0_90__noPred__A_0_5_S_1_5_stn_1_5_ed_5_0","ZZ_Auto_MFE_All_Filter__0_90__noPred__A_0_5_S_1_5_stn_6_0_ed_20_0","ZZ_Auto_MFE_All_Filter__0_90__noPred__A_0_5_S_1_5_stn_6_0_ed_50_0","ZZ_Auto_MFE_All_Filter__0_90__noPred__A_0_5_S_1_5_stn_6_0_ed_5_0","ZZ_Auto_MFE_All_Filter__0_90__noPred__A_0_5_S_5_0_stn_1_5_ed_20_0","ZZ_Auto_MFE_All_Filter__0_90__noPred__A_0_5_S_5_0_stn_1_5_ed_50_0","ZZ_Auto_MFE_All_Filter__0_90__noPred__A_0_5_S_5_0_stn_1_5_ed_5_0","ZZ_Auto_MFE_All_Filter__0_90__noPred__A_0_5_S_5_0_stn_6_0_ed_20_0","ZZ_Auto_MFE_All_Filter__0_90__noPred__A_0_5_S_5_0_stn_6_0_ed_50_0","ZZ_Auto_MFE_All_Filter__0_90__noPred__A_0_5_S_5_0_stn_6_0_ed_5_0"]

striFinal = ""

for line in tab:
        striFinal += "db."+line+".find({}).count()\n"

print(striFinal)

striFinal = ""

for line in tab:
       striFinal += "db."+line+".createIndex({ncm:1,soft:1})\n"



print(striFinal)




 


striFinal = ""

for line in tab:
       striFinal += "python after_index_created.py "+line+"\n"



print(striFinal)

for line in tab:
       print(line)
