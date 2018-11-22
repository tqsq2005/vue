import Vue from 'vue'
import Clipboard from 'clipboard'

function clipboardSuccess() {
  Vue.prototype.$message({
    message: 'Copy successfully',
    type: 'success',
    duration: 1500
  })
}

function clipboardError() {
  Vue.prototype.$message({
    message: 'Copy failed',
    type: 'error'
  })
}

/**
 * @description usage:  1 import clipboard from '@/utils/clipboard'
 *                      2 methods: {
                            generateIconCode(symbol) {
                              return `<svg-icon icon-class="${symbol}" />`
                            },
                            handleClipboard(text, event) {
                              clipboard(text, event)
                            }
                          }
                        3 @click="handleClipboard(generateIconCode(item),$event)"
 * @param text
 * @param event
 */
export default function handleClipboard(text, event) {
  const clipboard = new Clipboard(event.target, {
    text: () => text
  })
  clipboard.on('success', () => {
    clipboardSuccess()
    clipboard.off('error')
    clipboard.off('success')
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    clipboardError()
    clipboard.off('error')
    clipboard.off('success')
    clipboard.destroy()
  })
  clipboard.onClick(event)
}
