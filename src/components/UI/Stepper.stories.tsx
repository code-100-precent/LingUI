import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import Stepper from './Stepper'
import Button from './Button'

const meta: Meta<typeof Stepper> = {
  title: 'UI/Stepper',
  component: Stepper,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Stepper>

export const Default: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(1)
    const steps = [
      { title: 'Step 1', description: 'First step' },
      { title: 'Step 2', description: 'Second step' },
      { title: 'Step 3', description: 'Third step' },
      { title: 'Step 4', description: 'Final step' }
    ]
    return (
      <div className="space-y-4">
        <Stepper steps={steps} currentStep={currentStep} />
        <div className="flex gap-2">
          <Button onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}>Previous</Button>
          <Button onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}>Next</Button>
        </div>
      </div>
    )
  }
}

export const Vertical: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(1)
    const steps = [
      { title: 'Step 1', description: 'First step' },
      { title: 'Step 2', description: 'Second step' },
      { title: 'Step 3', description: 'Third step' }
    ]
    return (
      <div className="space-y-4">
        <Stepper steps={steps} currentStep={currentStep} orientation="vertical" />
        <div className="flex gap-2">
          <Button onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}>Previous</Button>
          <Button onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}>Next</Button>
        </div>
      </div>
    )
  }
}

export const WithContent: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(0)
    const steps = [
      { title: 'Step 1', description: 'First step', content: <div className="p-4">Content for step 1</div> },
      { title: 'Step 2', description: 'Second step', content: <div className="p-4">Content for step 2</div> },
      { title: 'Step 3', description: 'Third step', content: <div className="p-4">Content for step 3</div> }
    ]
    return (
      <div className="space-y-4">
        <Stepper steps={steps} currentStep={currentStep} showContent />
        <div className="flex gap-2">
          <Button onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}>Previous</Button>
          <Button onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}>Next</Button>
        </div>
      </div>
    )
  }
}

export const Clickable: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(1)
    const steps = [
      { title: 'Step 1', description: 'First step' },
      { title: 'Step 2', description: 'Second step' },
      { title: 'Step 3', description: 'Third step' }
    ]
    return (
      <Stepper steps={steps} currentStep={currentStep} onStepClick={setCurrentStep} />
    )
  }
}

