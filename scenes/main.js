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
  sprite('space-ship')
  ])