#include "Game.hpp"

// Game::Game() : window(nullptr), renderer(nullptr), isRunning(false) {}

SDL_Texture* playerTex;
SDL_Rect srcR, destR;

Game::Game() {}
Game::~Game() {}

void Game::init(const char* title, int xpos, int ypos, int width, int height, bool fullscreen) {
    int flags = 0;
    if (fullscreen) {
        flags = SDL_WINDOW_FULLSCREEN;
    }

    if (SDL_Init(SDL_INIT_EVERYTHING) == 0) {
        printf("Subsystems Initialized!...\n");

        window = SDL_CreateWindow(title, xpos, ypos, width, height, flags);
        if (window) {
            printf("Window created!\n");
        }

        renderer = SDL_CreateRenderer(window, -1, 0);
        if (renderer) {
            SDL_SetRenderDrawColor(renderer, 255, 255, 255, 255);
            printf("Renderer created!\n");
        }

        isRunning = true;
    } else {
        isRunning = false;
    }

    SDL_Surface* tmpSurface = IMG_Load("/home/rjm/projects/topdog/assets/player.png");
    playerTex = SDL_CreateTextureFromSurface(renderer, tmpSurface);
    SDL_FreeSurface(tmpSurface);
}

void Game::handleEvents() {
    SDL_Event event;
    SDL_PollEvent(&event);
    switch (event.type) {
        case SDL_QUIT:
            isRunning = false;
            break;
        default:
            break;
    }
}

void Game::update() {
    // Update game objects here
    cnt++;

    destR.h = 64;
    destR.w = 64;
    destR.x = cnt;

    printf("Count: %d\n", cnt);
}

void Game::render() {
    SDL_RenderClear(renderer);

    // Render game objects here
    SDL_RenderCopy(renderer, playerTex, NULL, &destR);


    SDL_RenderPresent(renderer);
}

void Game::clean() {
    SDL_DestroyWindow(window);
    SDL_DestroyRenderer(renderer);
    SDL_Quit();
    printf("Game Cleaned...\n");
}
