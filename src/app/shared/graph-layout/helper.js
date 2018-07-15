export async function move(nodes, force, interval_motion) {
    for (i=0;i<300;i++){
      shuffle(nodes, force_, interval_motion)
      await sleep(20);
      shuffleStop(interval_motion)
    }
}

function shuffle(nodes, force, interval_motion, width, heigth) {

  motion_binded = motion.bind(null, { width: width, heigth: heigth })
  force.restart()
  force.alpha(0.1)
  if (nodes.length < 200) {
    interval_motion = setInterval(function () {

      nodes.forEach(motion_binded);
      force.restart()

    }, 5);
  }
  else {
    nodes.forEach(motion_binded)
    force.restart()
  }
}

function shuffleStop(interval_motion) {
  clearInterval(interval_motion);
}

function motion(commonArg,e, index, array) {
  if (e.vx > 5) { e.vx = 5 }
  if (e.vy > 5) { e.vy = 5 }
  e.x = e.x + e.vx;
  e.y = e.y + e.vy;
  //console.log(e.x)
  //console.log(e.y)
  e.vx = e.vx + 10 * ((Math.random() - 0.5) - (e.x - commonArg.width * 0.5) / commonArg.width * 0.5);
  e.vy = e.vy + 10 * ((Math.random() - 0.5) - (e.y - commonArg.height * 0.5) / commonArg.height * 0.5);
}
