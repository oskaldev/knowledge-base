import * as React from 'react'
import type { FC, ReactNode } from 'react'
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  IconButton,
  Menu,
  Avatar,
  Tooltip,
  Button,
  MenuItem,
  Typography,
  Modal,
  TextField
} from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb'
import { Link } from 'react-router-dom'
import { routeConstants } from '@internal/routes'

interface IAppLayout {
  children: ReactNode;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

export const AppLayout: FC<IAppLayout> = ({ children }) => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  )
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              display: {
                xs: 'flex',
                justifyContent: 'space-around'
              },
              mr: 1
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex' },
                fontWeight: 400,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              <AdbIcon />
              CP
            </Typography>
            <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: 'flex' },
                fontWeight: 400,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              corporate platform
            </Typography>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem
                  sx={{ display: 'block' }}
                  onClick={handleCloseUserMenu}
                >
                  <MenuItem>
                    <div>
                      <Button onClick={handleOpen}>Settings</Button>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <Box>
                            <Typography
                              id="modal-modal-title"
                              variant="h6"
                              component="h2"
                            >
                              Settings Profile:
                            </Typography>
                            <Typography
                              id="modal-modal-description"
                              sx={{ mt: 2 }}
                              width="800px"
                            >
                              <TextField
                                id="filled-basic"
                                label="Name"
                                variant="filled"
                              />
                            </Typography>
                            <Typography
                              id="modal-modal-description"
                              sx={{ mt: 2 }}
                            >
                              <TextField
                                id="filled-basic"
                                label="Surname"
                                variant="filled"
                              />
                            </Typography>
                            <Typography
                              id="modal-modal-description"
                              sx={{ mt: 2 }}
                            >
                              <TextField
                                id="filled-basic"
                                label="Change password"
                                variant="filled"
                                type="password"
                              />
                            </Typography>
                            <Typography
                              id="modal-modal-description"
                              sx={{ mt: 2 }}
                            >
                              <TextField
                                sx={{ pt: 2 }}
                                id="filled-basic"
                                label="Birthdate"
                                variant="filled"
                                type="date"
                              />
                            </Typography>
                            <Button
                              sx={{
                                width: 200,
                                mt: 12
                              }}
                              variant="contained"
                            >
                              Save
                            </Button>
                          </Box>
                        </Box>
                      </Modal>
                    </div>
                  </MenuItem>
                  <MenuItem>
                    <Button>Выйти</Button>
                  </MenuItem>
                  <MenuItem>
                    <Button>
                      <Button component={Link} to={`/${routeConstants.ADMIN.path}`}>Админ панель</Button>
                    </Button>
                  </MenuItem>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <>{children}</>
    </>
  )
}
