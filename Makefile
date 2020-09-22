NPM ?= $(shell which npm)
YARN ?= $(shell which yarn)
PKG_MANAGER ?= $(if $(YARN),$(YARN),$(NPM))

install:
	cd backend && ${PKG_MANAGER} install
	cd ..
	cd frontend && ${PKG_MANAGER} install
