import { DetailedHTMLProps, IframeHTMLAttributes, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { Button } from '@mui/material'

import styles from './file-viewer.module.css'
import classnames from 'classnames'

interface IFileViewer extends DetailedHTMLProps<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement> {
}

export const FileViewer = ({
  src,
  ...props
}: IFileViewer) => {
  const [active, setActive] = useState<boolean>(false)

  const handlerOnActive = () => {
    setActive(true)
  }
  const handlerOnClose = () => {
    setActive(false)
  }

  if (!src) throw new Error('src not fount')
  const srcFile = `https://view.officeapps.live.com/op/embed.aspx?src=${src}`

  return (
    <div>
      <Button onClick={handlerOnActive}>Открыть</Button>

      {
        active && (
          <div className={classnames(styles.modal)}>
            <iframe
              src={srcFile}
              width="80%"
              height="80%"
              frameBorder="0"
              {...props}
            >
            </iframe>

            <CloseIcon
              onClick={handlerOnClose}
              className={styles.close}
              scale=""
            />
          </div>
        )
      }
    </div>
  )
}

