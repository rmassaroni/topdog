cd src
g++ main.cpp Game.cpp TextureManager.cpp GameObject.cpp Map.cpp -o ../game $(pkg-config --cflags --libs sdl2 SDL2_image)
cd ..
./game
