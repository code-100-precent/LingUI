import { Meta, StoryObj } from '@storybook/react'
import { ParticleBackground } from './ParticleBackground'

const meta: Meta<typeof ParticleBackground> = {
  title: 'UI/ParticleBackground',
  component: ParticleBackground,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ParticleBackground>

export const Default: Story = {
  render: () => (
    <div className="relative h-96 w-full bg-gray-900 rounded-lg overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <h2 className="text-2xl font-bold">Particle Background</h2>
      </div>
    </div>
  )
}

export const FewParticles: Story = {
  render: () => (
    <div className="relative h-96 w-full bg-gray-900 rounded-lg overflow-hidden">
      <ParticleBackground particleCount={20} />
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <p>20 Particles</p>
      </div>
    </div>
  )
}

export const ManyParticles: Story = {
  render: () => (
    <div className="relative h-96 w-full bg-gray-900 rounded-lg overflow-hidden">
      <ParticleBackground particleCount={100} />
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <p>100 Particles</p>
      </div>
    </div>
  )
}

export const CustomColor: Story = {
  render: () => (
    <div className="relative h-96 w-full bg-gray-900 rounded-lg overflow-hidden">
      <ParticleBackground color="#10b981" />
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <p>Green Particles</p>
      </div>
    </div>
  )
}

export const FastSpeed: Story = {
  render: () => (
    <div className="relative h-96 w-full bg-gray-900 rounded-lg overflow-hidden">
      <ParticleBackground speed={2} />
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <p>Fast Speed</p>
      </div>
    </div>
  )
}

