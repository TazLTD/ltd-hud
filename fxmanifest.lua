fx_version 'cerulean'
game "gta5"

description 'Limited Scripts'
version '2.0'
lua54 'yes'

ui_page 'build/index.html'

escrow_ignore {
    'config.lua',
    'client.lua',
    'server.lua',
}

shared_scripts {
    '@ox_lib/init.lua',
    'config.lua'
}

server_scripts {
    '@oxmysql/lib/MySQL.lua',
    'server.lua',
}

client_script 'client.lua'

files {
    'locales/*.json',
    'build/**',
}

dependency '/assetpacks'