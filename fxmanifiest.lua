fx_version 'cerulean'
game 'gta5'
 
version '0.0.1'
author 'DrunkTaric'
description 'A Fivem script library with static type inference'
 
lua54 'yes'
 
shared_scripts { 
    'dist/shared/*.js'
}
 
client_scripts {
    'dist/client/*.js'
}
 
server_scripts {
    'dist/server/*.js'
}