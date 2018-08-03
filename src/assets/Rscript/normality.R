install.packages("dplyr")
if(!require(devtools)) install.packages("devtools")
devtools::install_github("kassambara/ggpubr")
install.packages("ggpubr")
library("dplyr")
library("ggpubr")
library("car")
library("outliers")

v1 = c(0.0578,0,0.1416,0.2011,0,0.0391,0.2105,0.4667,0,0.2095,0.109,0.0848,0.0754,0.1663,0,0,-0.1749,0,-0.0629,0.1267,0.7091,0.2655,0.0136,1.0883,0.5203,0,0,-0.1934,0.2361,0.9404,0.1484,0.1246,0,0.1,0.0386,0,0.119,0.0695,0.0855,0.4617,0.1168,0,0,0,0.1111,0,-0.0299,0.041)

normPlot = which(v1 < 0.4 & v1 > -0.1)
v2 = v1[normPlot]

ggdensity(v1, 
          main = "Density plot",
          xlab = "reactivity Value")

ggqqplot(v1)
shapiro.test(v1)
shapiro.test(v2)

dixon.test(v1)


ggdensity(v2, 
          main = "Density plot",
          xlab = "reactivity Value")
