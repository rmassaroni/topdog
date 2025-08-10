g++ main.cpp Game.cpp -o game $(pkg-config --cflags --libs sdl2)
./game
