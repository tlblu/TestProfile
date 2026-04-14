SRC_DIR        := src
INCLUDE_DIR    := include
ASSETS_DIR	   := assets
BIN_DIR		   := bin

CFLAGS         := -Wall -Wextra -O2 -fPIC -fvisibility=default -Iinclude

all: testprofile

testprofile: $(SRC_DIR)/testprofile.c
	$(CC) $(CFLAGS) -o $(BIN_DIR)/$@ $^

clean:
	rm -f $(BIN_DIR)/testprofile