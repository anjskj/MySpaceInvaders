const Move_Speed = 200

layer(['obj', 'ui'], 'obj')

addLevel([
  '!^^^^^^^^^^^^^^^     &',
  '!^^^^^^^^^^^^^^^     &',
  '!^^^^^^^^^^^^^^^     &',
  '!                    &',
  '!                    &',
  '!                    &',
  '!                    &',
  '!                    &',
  '!                    &',  
],{
  width: 30,
  height: 22,
  '^' : [sprite('space-invader')],
  '!' : [sprite('wall'), 'left-wall'],  
  '&' : [sprite('wall'), 'right-wall'],
})

const player = add([
  sprite('space-ship'),
  pos(width()/2, height()/2),
  origin('center')
  ])


keyDown('left', ()=>{
 player.move(-Move_Speed,0)
  })   

keyDown('right', ()=>{
  player.move(Move_Speed,0)
  }) 
 
keyDown('up', ()=>{
    player.move(0, -Move_Speed,)
  })    

keyDown('down', ()=>{
    player.move(0, Move_Speed,)
  })    

const score = add([
  text('0'),
  pos(50,50),
  layer('ui'), 
  scale(3),
  {
    value: 0,
  }
])