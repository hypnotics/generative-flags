let moon
function preload () {
  moon = loadImage('img/moon.png')
}

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
    let color = palette[floor(random() * palette.length)]
    console.log('Setting color ' + color)
    return color
  }

  // Basic layouts
  let layouts = []
  let HorisontalLayout = function (fields) {
    console.log('Applying HorisontalLayout ' + fields)
    let start = 0
    let increment = floor(600 / fields)
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
    let increment = floor(400 / fields)
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
    let increment = floor(400 / correctedfields)
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
    layouts[floor(random() * layouts.length)](fields)
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
  let CrossOverlay = function (version, size = 60) {
    noStroke()
    console.log('Adding cross ' + version)
    if (version === 1) {
      rect(300 - (size / 2), 0, size, 400)
      rect(0, 200 - (size / 2), 600, size)
    } else {
      rect(200 - (size / 2), 0, size, 400)
      rect(0, 200 - (size / 2), 600, size)
    }
  }

  let DoubleCrossOverlay = function (version, size = 60) {
    noStroke()
    console.log('Adding 2x cross ' + version)
    CrossOverlay(version)
    fill(randomColor())
    CrossOverlay(version, 40)
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
  shapes.push(DoubleCrossOverlay)
  shapes.push(DiagonalOverlay)
  // shapes.push(BottomTriangleOverlay)
  let randomShape = function (version) {
    shapes[floor(random() * shapes.length)](version)
  }

  // Symbols
  let symbols = []
  // Star
  let StarSymbol = function (version) {
    let x = 300
    let y = 200
    let radius1 = 40
    let radius2 = 90
    let npoints = 5
    noStroke()
    // strokeWeight(20)

    console.log('Adding Star')
    var angle = TWO_PI / npoints
    var halfAngle = angle / 2.0
    beginShape()
    for (var a = 0; a < TWO_PI; a += angle) {
      var sx = x - sin(a) * radius2
      var sy = y - (cos(a) * radius2)
      vertex(sx, sy)
      sx = x - sin(a + halfAngle) * radius1
      sy = y - (cos(a + halfAngle) * radius1)
      vertex(sx, sy)
    }
    endShape(CLOSE)
  }
  let SunSymbol = function (version) {
    let x = 300
    let y = 200
    let radius1 = 80
    let radius2 = 100
    let npoints = 30
    noStroke()

    console.log('Adding Sun')
    var angle = TWO_PI / npoints
    var halfAngle = angle / 2.0
    beginShape()
    for (var a = 0; a < TWO_PI; a += angle) {
      var sx = x + (cos(a) * radius2)
      var sy = y + sin(a) * radius2
      vertex(sx, sy)
      sx = x + (cos(a + halfAngle) * radius1)
      sy = y + sin(a + halfAngle) * radius1
      vertex(sx, sy)
    }
    endShape(CLOSE)
  }
  symbols.push(StarSymbol)
  symbols.push(SunSymbol)
  let randomSymbol = function (version) {
    symbols[floor(random() * symbols.length)](version)
  }

  // Icons
  let icons = []
  let MoonIcon = function (version) {
    console.log('Adding Moon ' + version)
    if (version == 1) {
      image(moon, 198, 105, 200, 200)
    } else {
      translate(width / 2, height / 2)
      rotate(PI / 4)
      image(moon, -104, -94, 200, 200)
    }
  }
  icons.push(MoonIcon)
  let randomIcon = function (version) {
    icons[floor(random() * icons.length)](version)
  }

  // Draw a flag

  // Apply layout (1-5 fields)
  randomLayout(floor(random() * 5) + 1)

  // Apply overlay
  fill(randomColor())
  stroke(randomColor())
  randomShape(floor(random() * 3) + 1)

  // Apply symbol
  fill(randomColor())
  stroke(randomColor())
  randomSymbol(floor(random() * 3) + 1)

  // Apply icon
  tint(randomColor())
  randomIcon(floor(random() * 3) + 1)
}

function draw () {

}
