#pragma once //?

#ifndef Game_hpp
#define Game_hpp

#include "SDL2/SDL.h"
#include "SDL2/SDL_image.h"
#include <iostream>
#include <stdio.h>

class Game {
public:
    Game();
    ~Game();

    // bool init(const char* title, int width, int height);
    // void handleEvents();
    // void update();
    // void render();
    // void clean();
    // bool running() { return isRunning; }

    void init(const char* title, int xpos, int ypos, int width, int height, bool fullscreen);

    void handleEvents();
    void update();
    bool running() { return isRunning; }
    void render();
    void clean();
    static SDL_Renderer *renderer;

private:
    int cnt = 0;
    bool isRunning;
    SDL_Window* window;
    // SDL_Renderer* renderer;
};

#endif /* Game_hpp */
