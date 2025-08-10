g++ main.cpp Game.cpp -o game $(pkg-config --cflags --libs sdl2 SDL2_image)
./game
