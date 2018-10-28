var cthulu;
var cthulu_x =0 ;
var cthulu_y=0;
var cube;
var ice_x = Math.random()*320;
var ice_y = Math.random()*320;
var menu;
var playarea;
var state=0;
var end;

function draw()
{
	
	if (state == 0)
	{
		simple_blit(menu,canvas,0,0)
	}
	else if(state == 1)
	{
		simple_blit(playarea,canvas,0,0)
		simple_blit(cthulu,canvas,cthulu_x,cthulu_y)
		simple_blit(cube,canvas,ice_x,ice_y)
	}
	else {
		simple_blit(end,canvas,0,0)
	}
}
function update()
{
	if(distance2(cthulu_x,cthulu_y,ice_x,ice_y)<=64 )
	{
		state=2
	}
	if(state == 0){
		if(key[KEY_X])
			state=1
	}
	if(state == 1){
		if(key[KEY_UP]){cthulu_y -= 1}
		if(key[KEY_DOWN]){cthulu_y += 1}
		if(key[KEY_LEFT]){cthulu_x -= 1}
		if(key[KEY_RIGHT]){cthulu_x += 1}
	}
}

function main()
{
	enable_debug('debug');
	allegro_init_all("gameScreen", 320, 320);
	cthulu = load_bitmap("cthulu.png")
	cube = load_bitmap("cube.png")
	playarea = load_bitmap("map.png")
	menu = load_bitmap("start.png")
	end = load_bitmap("end.png")

	ready(function(){
		loop(function(){
			update();
			draw();
		},BPS_TO_TIMER(60));
	});
	return 0;
}
END_OF_MAIN();