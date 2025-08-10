#include <SDL2/SDL.h>

int main(int argc, char* argv[]) {
    // Initialize SDL
    // if (SDL_Init(SDL_INIT_VIDEO) < 0) {
    //     return 1; // Initialization failed
    // }
    SDL_Init(SDL_INIT_EVERYTHING);

    // Create a window
    SDL_Window* window = SDL_CreateWindow("SDL Window", 
                                          SDL_WINDOWPOS_UNDEFINED, 
                                          SDL_WINDOWPOS_UNDEFINED, //SDL_WINDOWPOS_CENTERD
                                          800, 600, 
                                          SDL_WINDOW_SHOWN);
    if (!window) {
        SDL_Quit();
        return 1; // Window creation failed
    }

    SDL_Renderer* renderer = SDL_CreateRenderer(window, -1, 0);
    // SDL_Renderer* renderer = SDL_CreateRenderer(window, -1, SDL_RENDERER_ACCELERATED);
    
    SDL_SetRenderDrawColor(renderer, 0, 0, 0, 255); // Set background color to black
    
    SDL_RenderClear(renderer); // Clear the window with the background color

    SDL_RenderPresent(renderer); // Present the renderer

    SDL_Delay(2000); // Wait for 2 seconds to see the window

    // Main loop
    bool running = true;
    SDL_Event event;
    while (running) {
        while (SDL_PollEvent(&event)) {
            if (event.type == SDL_QUIT) {
                running = false; // Exit on quit event
            }
        }
        // Here you would typically render your graphics
    }

    // Clean up and exit
    SDL_DestroyWindow(window);
    SDL_Quit();
    return 0;
}
