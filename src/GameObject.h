#pragma once
#include "Game.hpp"

class GameObject {

public:
    // GameObject(Game* game, const std::string& name);
    // virtual ~GameObject();
    //
    // virtual void update(float deltaTime) = 0;
    // virtual void render() = 0;
    //
    // const std::string& getName() const;
    // Game* getGame() const;

    GameObject(const char* texturesheet, int x, int y);
    ~GameObject();

    void Update();
    void Render();

private:
    int xpos;
    int ypos;

    SDL_Texture* objTexture;
    SDL_Rect srcRect, destRect;
};
