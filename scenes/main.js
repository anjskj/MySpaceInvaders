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

const Move_Speed = 200

  keyDown('left', ()=>{
    player.move(-Move_Speed,0)
  })

    keyDown('right', ()=>{
    player.move(Move_Speed,0)
  })