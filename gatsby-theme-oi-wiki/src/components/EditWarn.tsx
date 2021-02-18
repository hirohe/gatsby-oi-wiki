import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@material-ui/core'

import React from 'react'
import { SmartLink } from './Link'

const EditWarning = ():JSX.Element => {
  return (
    <>
      <p>首先，感谢您能够为 OI Wiki 做出自己的贡献。</p>
      <p>
      不过在开始之前，我们需要您了解并熟知
        <SmartLink to="/intro/htc/" target="_blank" rel="noopener noreferrer nofollow">如何参与</SmartLink>
      里的内容，以避免在编辑时产生不必要的麻烦。
      </p>
      <p>在阅读完之后，请点击下方的按钮，然后开始编辑。</p>
    </>
  )
}

interface Props{
  relativePath: string;
  dialogOpen: boolean;
  setDialogOpen: (props:boolean)=> any;
  location: any;
}
const EditWarn: React.FC<Props> = (props: Props) => {
  const { relativePath, dialogOpen, setDialogOpen, location } = props
  const editURL = 'https://github.com/OI-wiki/OI-wiki/edit/master/docs/'

  return (
    <Dialog
      open={dialogOpen}
      onClose={() => {
        setDialogOpen(false)
      }}
    >
      <DialogTitle>编辑前须知</DialogTitle>
      <DialogContent><EditWarning /></DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setDialogOpen(false)
          }}
        >
          取消
        </Button>
        <Button
          component="a"
          href={editURL + relativePath}
          target="_blank"
          rel="noopener noreferrer nofollow"
          onClick={() => {
            setDialogOpen(false)
          }}
        >
          开始编辑
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EditWarn
