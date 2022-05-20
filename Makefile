# See in https://www.gnu.org/software/make/manual/html_node/index.html
# for more information about Makefile.
.POSIX:
SHELL := /bin/bash
YARN :=  $(shell which yarn)

# Build the application
build: fmt
	$(YARN) run build

# Local development
dev: install
	$(YARN) run dev

# Format the code
fmt:
	$(YARN) run fmt

# Install dependencies
install:
	if [ ! -d "node_modules" ]; then $(YARN); fi
