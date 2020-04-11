// Live reload para os arquivos html
require('electron-reload')(__dirname);

// Ferramentas do electron:
const { app, BrowserWindow, screen } = require('electron')

// Função responsável pela criação de uma tela
function createWindow() {
  // Abstrai as dimensões da tela do usuário
  const { width, height } = screen.getPrimaryDisplay().workAreaSize
  const w = width / 2
  const h = height / 2
  const minWidth = width / 2
  const minHeight = height / 2 


  // Cria a janela
  let window = new BrowserWindow({
    width: w,
    height: h,
    minWidth,
    minHeight,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  // Carrega o arquivo html
  window.loadFile('index.html')

  // Iniciar maximizado
  window.maximize()

  // Remove barra de menus
  window.setMenu(null)
}

// Executa a função quando a aplicação estiver pronta
app.whenReady().then(createWindow)