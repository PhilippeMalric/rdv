install.packages("stringr")
library("stringr")
library("rjson")

# pred analysis

folder = "C:/Users/p/Desktop/prediction/"
files = list.files(path = folder,recursive = TRUE)
f = files[[1]]

str_match(files, "S_(.*)_stn_(.*)_ed_(.*)/")

readFile = function(f)
{
  info = str_match(f, "S_(.*)_stn_(.*)_ed_(.*)/")
  y = fromJSON(file = paste(folder,f,sep=""))
  y["fileName"] = f
  y["my_s"] = info[2]
  y["my_stn"] = info[3]
  y["my_ed"] = info[4]
  y
  
}

#C:\Users\p\Desktop\prediction\_Auto__Filter__90__Pred_db_rdv_col_20_0_0_5_1_0

fileList = lapply(files,readFile)

oneFile = fileList[[1]]

attributes(oneFile)

get.sm = function(oneFile){
  
  oneFile$ScoresMoy
  
}

get.stn = function(oneFile){
  
  oneFile$stn
  
}

get.nts = function(oneFile){
  
  oneFile$nts
}


scoreMoyen.vector = sapply(fileList,get.sm)

plot(sort(scoreMoyen.vector))


stn.vector = sapply(fileList,get.stn)
unique(stn.vector)

fileList.stn.1_5  = fileList[which(stn.vector == "1_5")]

fileList.stn.6_0  =fileList[which(stn.vector == "6_0")]





nts.vector = sapply(fileList.stn.6_0,get.nts)

nts.vector.stn.6_0 = nts.vector

nts.vector.stn.6_0.unList = unlist(nts.vector.stn.6_0,recursive=FALSE)

one.nts = nts.vector.stn.6_0.unList[[1]]

get.ncm = function(one.nts){
  
  
  reactivity = one.nts$reactivity_pred
  score.so = one.nts$ncmTabDG_so[[1]]$scoreConfiance
  score.mcff =  one.nts$ncmTabDG_mcff[[1]]$scoreConfiance
  paire.so = one.nts$freqPairee_so
  paire.mcff = one.nts$freqPairee_mcff
  list("reactivity"=reactivity,"score.so"=score.so,"score.mcff"=score.mcff,"paire.mcff"=paire.mcff,"paire.so"=paire.so)
  
  
}

ncm.vector = lapply(nts.vector.stn.6_0.unList,get.ncm)


get.score.so = function(v){
  
  v$score.so
  
}

get.score.mcff = function(v){
  
  v$score.mcff
  
}

get.reactivity = function(v){
  
  v$reactivity
  
}

get.paire.mcff = function(v){
  
  v$paire.mcff
  
}

get.paire.so = function(v){
  
  v$paire.so
  
}

ract.vector = sapply(ncm.vector,get.reactivity)


lowNts = ncm.vector[which(ract.vector == "Low")]


mcff.score.low = sapply(lowNts,get.score.mcff)

plot(sort(mcff.score.low))

so.score.low = sapply(lowNts,get.score.so)

plot(sort(so.score.low))


#hi --------------------- hi

hi.Nts = ncm.vector[which(ract.vector == "Hi")]


mcff.score.hi = sapply(hi.Nts,get.score.mcff)

plot(sort(mcff.score.hi))

so.score.hi = sapply(hi.Nts,get.score.so)

plot(sort(so.score.hi))



#------------------------------------------- pairee


mcff.pairee.low = sapply(lowNts,get.paire.mcff)

plot(sort(mcff.pairee.low))

so.pairee.low = sapply(lowNts,get.paire.so)

plot(sort(so.pairee.low))


#hi --------------------- hi



mcff.pairee.hi = sapply(hi.Nts,get.paire.mcff)

plot(sort(mcff.pairee.hi))

so.pairee.hi = sapply(hi.Nts,get.paire.so)

plot(sort(so.pairee.hi))



