
library("rjson")

# pred analysis

folder = "C:/Users/p/Desktop/S_pred_Filter_ETERNA_R9_Pred_db_rdv_col_5_0_1_0_5_0_stat__A_0_5_S_1_0_stn_1_0_ed_20_0_big/"

predFiles = list.files(folder)

readJSON.pred = function(x){
  
  y = fromJSON(file = paste(folder,x,sep=""))
  y["fileName"] = x
  y
}


predJson = lapply(predFiles,readJSON.pred)

one.predJson = predJson[[1]]

attributes(one.predJson)

one.pj = one.predJson

getRNAScore_so = function(one.pj){
  
  one.pj$sc_so[1]
}

RNAScore_so = sapply(predJson,getRNAScore_so)

mean_so = mean(RNAScore_so)

plot(sort(RNAScore_so))


getRNAScore_mcff = function(one.pj){
  
  one.pj$sc_mcff[1]
}

RNAScore_mcff = sapply(predJson,getRNAScore_mcff)

mean_mcff = mean(RNAScore_mcff)

plot(sort(RNAScore_mcff))



#obtenir les nucleotides (RNa, pos, pairee?, ncmValeur, recactivite )


#pass throught tous les nucleotides



getNTS = function(rna){
  #str(rna)
  lapply(rna$nts,getDetails)
  
}

getDetails = function(nt){
  
  id = nt$rna_id
  pos = nt$position
  p_so = nt$voisinPairAllsub_so[[1]]$p_i > -1
  p_mcff = nt$voisinPairAllsub_mcff[[1]]$p_i > -1
  pred.val.so = nt$ncmTabDG_so[[1]]$scoreConfiance
  pred.val.mcff = nt$ncmTabDG_mcff[[1]]$scoreConfiance
  real.react = nt$reactivity_pred
  list(id=id,pos=pos,p_so=p_so,p_mcff=p_mcff,pred.val.so=pred.val.so,pred.val.mcff=pred.val.mcff,real.react=real.react)
  
}

nt = predJson[[1]]$nts[[1]]

nt.list = sapply(predJson,getNTS)


nt.v = unlist(nt.list,recursive=FALSE)

my.nt = nt.v[[1]]

get.rr = function(my.nt){
  my.nt$real.react
}

get.p_so = function(my.nt){
  my.nt$p_so
}

get.p_mcff = function(my.nt){
  my.nt$p_mcff
}





rr = sapply(nt.v,get.rr)



nt.hi = which(rr == "Hi" )

hi.v = nt.v[nt.hi]

hi.p.mcff = sapply(hi.v,get.p_mcff)

hi.pairee.mcff = hi.v[which(hi.p.mcff)]

hi.N.pairee.mcff = hi.v[which(!hi.p.mcff)]

ratio.hi.Np.p.mcff = length(hi.N.pairee.mcff)/length(hi.pairee.mcff)


hi.p.so = sapply(hi.v,get.p_so)

hi.pairee.so = hi.v[which(hi.p.so)]

hi.N.pairee.so = hi.v[which(!hi.p.so)]

ratio.hi.Np.p.so = length(hi.N.pairee.so)/length(hi.pairee.so)

# Low

nt.low = which(rr == "Low" )

low.v = nt.v[nt.low]

low.p.mcff = sapply(low.v,get.p_mcff)

low.pairee.mcff = low.v[which(low.p.mcff)]

low.N.pairee.mcff = low.v[which(!low.p.mcff)]

ratio.low.p.Np.mcff = length(low.pairee.mcff)/length(low.N.pairee.mcff)


low.p.so = sapply(low.v,get.p_so)

low.pairee.so = low.v[which(low.p.so)]

low.N.pairee.so = low.v[which(!low.p.so)]

ratio.low.p.Np.so = length(low.pairee.so)/length(low.N.pairee.so)


# predVal

get.pred.val.so = function(my.nt){
  my.nt$pred.val.so
}

get.pred.val.mcff = function(my.nt){
  my.nt$pred.val.mcff
}

#stat generale

nt.pv.mcff = sapply(nt.v,get.pred.val.mcff)

plot(sort(nt.pv.mcff))

nt.pv.so = sapply(nt.v,get.pred.val.so)

plot(sort(nt.pv.so))

#stat Hi et low

hi.pv.mcff = sapply(hi.v,get.pred.val.mcff)

plot(sort(hi.pv.mcff))

hi.predV.sous0.mcff = hi.v[which(hi.pv.mcff < 0 )]

hi.predV.audessus0.mcff = hi.v[which(hi.pv.mcff > 0)]

ratio.hi.audessus.sous.mcff = length(hi.predV.audessus0.mcff)/length(hi.predV.sous0.mcff)


hi.pv.so = sapply(hi.v,get.pred.val.so)

plot(sort(hi.pv.so))

hi.predV.sous0.so = hi.v[which(hi.pv.so < 0)]

hi.predV.audessus0.so = hi.v[which(hi.p.so > 0)]

ratio.hi.audessus.sous.so = length(hi.predV.audessus0.so)/length(hi.predV.sous0.so)

# Low


low.pv.mcff = sapply(low.v,get.pred.val.mcff)

plot(sort(low.pv.mcff))

low.predV.sous0.mcff = low.v[which(low.pv.mcff < 0)]

low.audessus0.mcff = low.v[which(low.pv.mcff > 0)]

ratio.low.audessus.sous.mcff = length(low.audessus0.mcff)/length(low.predV.sous0.mcff)


low.pv.so = sapply(low.v,get.pred.val.so)

plot(sort(low.pv.so))

low.predV.sous0.so = low.v[which(low.pv.so < 0)]

low.predV.audessus0.so = low.v[which(low.pv.so > 0)]

ratio.low.audessus.sous.so = length(low.predV.audessus0.so)/length(low.predV.sous0.so)

