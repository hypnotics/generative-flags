
function setup () {
  // Create the canvas
  createCanvas(600, 400)
  background(255)
  fill(255)
  // frame
  // rect(2, 2, 596, 396)
  noStroke()

  // Colors
  let palette = []

  let color1 = [9, 21, 64, 255]
  let color2 = [255, 187, 15, 255]
  let color3 = [250, 166, 255, 255]
  let color4 = [31, 47, 22, 255]
  let color5 = [211, 255, 243, 255]

  palette.push(color1)
  palette.push(color2)
  palette.push(color3)
  palette.push(color4)
  palette.push(color5)

  let randomColor = function () {
    let color = palette[Math.floor(Math.random() * palette.length)]
    console.log('Setting color ' + color)
    return color
  }

  // Basic layouts
  let layouts = []
  let HorisontalLayout = function (fields) {
    console.log('Applying HorisontalLayout ' + fields)
    let start = 0
    let increment = Math.floor(600 / fields)
    for (let i = 0; i < fields; i++) {
      let pos = start + increment
      fill(randomColor())
      if (i == 0) {
        rect(0, 0, increment, 400)
      } else {
        rect(pos, 0, increment, 400)
        start += increment
      }
    }
  }
  let VerticalLayout = function (fields) {
    console.log('Applying VerticalLayout ' + fields)
    let start = 0
    let increment = Math.floor(400 / fields)
    for (let i = 0; i < fields; i++) {
      let pos = start + increment
      fill(randomColor())
      if (i == 0) {
        rect(0, 0, 600, increment)
      } else {
        rect(0, pos, 600, increment)
        start += increment
      }
    }
  }
  let StripedLayout = function (fields) {
    let correctedfields = (fields * 2) + 1
    console.log('Applying StripedLayout ' + correctedfields)
    let start = 0
    let increment = Math.floor(400 / correctedfields)
    let stripe1 = randomColor()
    let stripe2 = randomColor()

    for (let i = 0; i < correctedfields; i++) {
      let pos = start + increment
      if (i % 2 === 0) {
        fill(stripe1)
      } else {
        fill(stripe2)
      }
      if (i == 0) {
        rect(0, 0, 600, increment)
      } else {
        rect(0, pos, 600, increment)
        start += increment
      }
    }
  }
  layouts.push(HorisontalLayout)
  layouts.push(VerticalLayout)
  layouts.push(StripedLayout)
  let randomLayout = function (fields) {
    layouts[Math.floor(Math.random() * layouts.length)](fields)
  }

  // Overlays
  let shapes = []
  let CircleOverlay = function (version) {
    noStroke()
    console.log('Adding circle ' + version)
    if (version === 1) {
      ellipse(300, 200, 200, 200)
    } else {
      ellipse(300, 200, 300, 300)
    }
  }
  let SideTriangleOverlay = function (version) {
    noStroke()
    console.log('Adding triangle ' + version)
    if (version === 1) {
      triangle(0, 0, 0, 400, 200, 200)
    } else if (version === 2) {
      triangle(0, 0, 0, 400, 400, 200)
    } else {
      triangle(0, 0, 0, 400, 600, 200)
    }
  }
  let BottomTriangleOverlay = function (version) {
    noStroke()
    console.log('Adding b-tri ' + version)
    if (version === 1) {
      triangle(0, 400, 600, 400, 300, 200)
    } else {
      triangle(0, 400, 600, 400, 300, 0)
    }
  }
  let CrossOverlay = function (version) {
    noStroke()
    console.log('Adding cross ' + version)
    let size = 60
    if (version === 1) {
      rect(300 - (size / 2), 0, size, 400)
      rect(0, 200 - (size / 2), 600, size)
    } else {
      rect(200 - (size / 2), 0, size, 400)
      rect(0, 200 - (size / 2), 600, size)
    }
  }
  let DiagonalOverlay = function (version) {
    console.log('Adding diagonal ' + version)
    strokeWeight(60)
    if (version === 1) {
      line(0, 0, 600, 400)
    } else if (version === 2) {
      line(0, 400, 600, 0)
    } else {
      line(0, 0, 600, 400)
      line(0, 400, 600, 0)
    }
  }
  shapes.push(CircleOverlay)
  shapes.push(SideTriangleOverlay)
  shapes.push(CrossOverlay)
  shapes.push(DiagonalOverlay)
  // shapes.push(BottomTriangleOverlay)
  let randomShape = function (version) {
    shapes[Math.floor(Math.random() * shapes.length)](version)
  }

  // Symbols
  let symbols = []
  // Star, Moon, Sun
  let sFlower = function (x, y) {
    translate(x, y)
    for (let i = 0; i < 10; i++) {
      ellipse(0, 30, 20, 80)
      rotate(PI / 5)
    }
  }
  symbols.push(sFlower)

  // Draw a flag

  // Apply layout (1-5 fields)
  randomLayout(Math.floor(Math.random() * 5) + 1)

  // Apply overlay
  fill(randomColor())
  stroke(randomColor())
  randomShape(Math.floor(Math.random() * 3) + 1)
}

function draw () {

}
