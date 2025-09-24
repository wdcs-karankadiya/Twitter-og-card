// Tailwind Typography component for OpenGraph images
interface TwTypographyProps {
  tw?: string
  children: React.ReactNode
}

export default function TwTypography({ tw, children }: TwTypographyProps) {
  return <span className={tw}>{children}</span>
}
