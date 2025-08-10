
#ifndef Game_hpp
#define Game_hpp

#include "SDL2/SDL.h"
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
    void render();
    void clean();

    bool running() { return isRunning; }

private:
    bool isRunning;
    SDL_Window* window;
    SDL_Renderer* renderer;
};

#endif /* Game_hpp */
