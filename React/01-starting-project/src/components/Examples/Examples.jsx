import { useState } from 'react'
import { EXAMPLES } from '../../data.js'
import Section from '../Section.jsx'
import Tabs from '../Tab.jsx'
import TabButton from './TabButton.jsx'

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState()

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
  }

  return (
    <Section id='examples'>
      <h2>Examples</h2>
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onClick={() => handleSelect('components')}
            >
              Component
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onClick={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onClick={() => handleSelect('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onClick={() => handleSelect('state')}
            >
              State
            </TabButton>
          </>
        }
      >
        {!selectedTopic ? (
          <p>Please Select a Topic!</p>
        ) : (
          <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
    </Section>
  )
}
