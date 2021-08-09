import {useTheme} from '../hooks/use_theme'
import {Svgs} from './svgs'
import {Content} from './content'
import {Card} from './card'
import {Element} from 'react-scroll'

interface Props {
  name: string
}

export const Cards = <T extends Props>({
  items,
  getCell,
  hasSvgs = true,
}: {
  items: Array<T>
  getCell: (item: T, getSvg: (key: string) => JSX.Element) => JSX.Element
  hasSvgs: boolean
}) => {
  const theme = useTheme()
  const svgs = hasSvgs ? Svgs(48, theme) : null
  const getSvg = (key: string) => (svgs ? svgs[key] : <div />)

  return (
    <Content>
      {items.map((i) => (
        <Element key={i.name} name={i.name}>
          <Card key={i.name}>{getCell(i, getSvg)}</Card>
        </Element>
      ))}
    </Content>
  )
}
