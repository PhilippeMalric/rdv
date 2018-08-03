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
  y["s"] = info[2]
  y["stn"] = info[3]
  y["ed"] = info[4]
  y
  
}

fileList = lapply(files,readFile)


