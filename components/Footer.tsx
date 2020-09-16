import Container from './Container'

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-gray-300">
      <Container>
        <div className="py-10 md:py-20 space-y-4">
          <h3 className="text-4xl lg:text-5xl font-bold">
            Want to get involved?{' '}
            <a className="link" href="https://discord.gg/uy3wCpZ">
              Join our Discord
            </a>
          </h3>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
