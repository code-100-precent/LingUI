import { Meta, StoryObj } from '@storybook/react'
import GlobalEffects from './GlobalEffects'
import Card from '../UI/Card'
import Button from '../UI/Button'

const meta: Meta<typeof GlobalEffects> = {
  title: 'Effects/GlobalEffects',
  component: GlobalEffects,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof GlobalEffects>

const DefaultContent = () => (
  <div className="p-8">
    <Card>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Content with Global Effects</h2>
        <p className="mb-4">This content is wrapped with global effects.</p>
        <Button>Click Me</Button>
      </div>
    </Card>
  </div>
)

const NeonContent = () => (
  <div className="p-8">
    <Card>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Neon Theme</h2>
        <p>This uses the neon theme.</p>
      </div>
    </Card>
  </div>
)

const CyberContent = () => (
  <div className="p-8">
    <Card>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Cyber Theme</h2>
        <p>This uses the cyber theme.</p>
      </div>
    </Card>
  </div>
)

const NoParticlesContent = () => (
  <div className="p-8">
    <Card>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">No Particles</h2>
        <p>Particles are disabled.</p>
      </div>
    </Card>
  </div>
)

const NoBackgroundContent = () => (
  <div className="p-8">
    <Card>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">No Background</h2>
        <p>Background effects are disabled.</p>
      </div>
    </Card>
  </div>
)

const NoSoundContent = () => (
  <div className="p-8">
    <Card>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">No Sound</h2>
        <p>Sound effects are disabled.</p>
      </div>
    </Card>
  </div>
)

export const Default: Story = {
  args: {
    children: <DefaultContent />
  }
}

export const Neon: Story = {
  args: {
    theme: 'neon',
    children: <NeonContent />
  }
}

export const Cyber: Story = {
  args: {
    theme: 'cyber',
    children: <CyberContent />
  }
}

export const WithoutParticles: Story = {
  args: {
    enableParticles: false,
    children: <NoParticlesContent />
  }
}

export const WithoutBackground: Story = {
  args: {
    enableBackground: false,
    children: <NoBackgroundContent />
  }
}

export const WithoutSound: Story = {
  args: {
    enableSound: false,
    children: <NoSoundContent />
  }
}

