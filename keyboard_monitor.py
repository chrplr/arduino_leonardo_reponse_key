# /usr/bin/env python
# Time-stamp: <2024-12-07 11:42:55 christophe@pallier.org>

""" basic HID (keyboard, mouse, ...) event monitor """ 

import pygame

screen_width = 1280
screen_height = 800
FONT_SIZE = 40
event_names = { pygame.KEYUP: "keyup", 
                pygame.KEYDOWN: "keydown", 
                pygame.MOUSEBUTTONUP: "buttonup", 
                pygame.MOUSEBUTTONDOWN: "buttondown",
            }


class App(object):
    def __init__(self):
        pygame.init()
        self.screen = pygame.display.set_mode((screen_width, screen_height))
        pygame.display.set_caption('Monitor keyboard & mouse buttons')
        self.font = pygame.font.Font(None, FONT_SIZE)
        self.margin = 10
        self.line = 0
        self.maxlines = (screen_height - 2 * self.margin) // FONT_SIZE
        

    def display(self, txt):
        text = self.font.render(txt.replace("\t", "  "), True, pygame.Color('white'))
        text_rect = text.get_rect(center=(screen_width // 2, screen_height //2))
        self.line = self.line + 1
        if self.line > self.maxlines:
            self.screen.fill(pygame.Color('black'))
            self.line = 1
            
        self.screen.blit(text, (100, self.margin + self.line * 40))
    
        pygame.display.flip()

    def main_loop(self):
        t0 = pygame.time.get_ticks()
        last_event_time = 0
        running = True
        while running:
            for event in pygame.event.get():
                txt = ""
                now = pygame.time.get_ticks() - t0
                delta = now - last_event_time
        
                if event.type == pygame.QUIT: 
                    running = False
                if event.type in [pygame.KEYDOWN, pygame.KEYUP]:
                    txt = "\t".join(map(str, [now, delta, event.key, pygame.key.name(event.key), event_names[event.type]]))
                if event.type in [pygame.MOUSEBUTTONDOWN, pygame.MOUSEBUTTONUP]:
                    txt = "\t".join(map(str, [now, delta, event.button, event.button, event_names[event.type]]))

                if txt != "":
                    print(txt)
                    self.display(txt)
                    last_event_time = now
                    

        pygame.quit()


app = App()
app.main_loop()
