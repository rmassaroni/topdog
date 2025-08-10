#pragma once

#include "Game.hpp"

class TextureManager {
public:
    // static SDL_Texture* loadTexture(const std::string& filePath) {
    //     SDL_Texture* texture = IMG_LoadTexture(Game::getRenderer(), filePath.c_str());
    //     if (!texture) {
    //         SDL_Log("Failed to load texture: %s, %s", filePath.c_str(), IMG_GetError());
    //     }
    //     return texture;
    // }
    static SDL_Texture* LoadTexture(const char* fileName, SDL_Renderer* ren);
};
