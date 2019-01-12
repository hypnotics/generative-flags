
function setup () {
  // Create the canvas
  createCanvas(600, 400)
  background(255)
  fill(255)
  rect(2, 2, 596, 396)
  noStroke()

  // Colors
  let palette = []
  // let color1 = [201, 169, 169, 255]
  // let color2 = [20, 54, 66, 255]
  // let color3 = [15, 139, 141, 255]
  // let color4 = [236, 154, 41, 255]
  // let color5 = [168, 32, 26, 255]

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
    return palette[Math.floor(Math.random() * palette.length)]
  }
  // Shapes
  let shapes = []
  let sRectangle = function (x, y) { rect(x, y, 400, 150) }
  let sCircle = function (x, y) { ellipse(x, y, 200, 200) }
  let sTriangle = function (x, y) { triangle(x, y, x + 90, y, x + 60, y - 40) }
  let sFlower = function (x, y) {
    translate(x, y)
    for (let i = 0; i < 10; i++) {
      ellipse(0, 30, 20, 80)
      rotate(PI / 5)
    }
  }
  shapes.push(sRectangle)
  shapes.push(sCircle)
  shapes.push(sTriangle)
  shapes.push(sFlower)
  let randomShape = function (x, y) {
    shapes[Math.floor(Math.random() * shapes.length)](x, y)
  }

  // draw
  for (let i = 0; i < 10; i++) {
    fill(randomColor())
    let randX = Math.floor(Math.random() * 400)
    let randY = Math.floor(Math.random() * 400)
    randomShape(randX, randY)
  }
}

function draw () {

}
