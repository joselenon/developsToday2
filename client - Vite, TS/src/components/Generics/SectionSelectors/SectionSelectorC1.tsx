import React, { ReactNode, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

const SectionSelectionContainer = styled.div`
  width: fit-content;
  overflow-x: hidden;
  display: flex;
  /*   margin-bottom: 1.5rem; */
  gap: 1rem;

  a {
    width: 100%;
  }
`;

interface ISectionItemProps {
  $isSelected: boolean;
  $color?: string;
}

const SectionItem = styled.div<ISectionItemProps>`
  cursor: pointer;
  display: flex;
  gap: 12px;
  height: 100%;
  align-items: center;
  padding: 12px;
  white-space: nowrap;
  transition: all 0.15s;
  position: relative;
  flex: 1;
  background: var(--color-primary);
  border-radius: var(--default-br);

  span,
  svg {
    font-weight: 600;
    color: ${({ $isSelected, $color }) => ($isSelected ? $color || 'var(--color-blue)' : 'var(--color-white)')};
    transition: all 0.15s;
  }

  /*   &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: ${({ $isSelected, $color }) =>
    $isSelected ? $color || 'var(--color-blue)' : 'var(--color-grey)'};
    transition: background-color 0.15s;
  }
 */
  &:hover {
    span {
      color: ${({ $color }) => $color || 'var(--color-blue)'};
    }
    svg {
      color: ${({ $color }) => $color || 'var(--color-blue)'};
    }

    &::after {
      background-color: ${({ $color }) => $color || 'var(--color-blue)'};
    }
  }
`;

const SectionContentContainer = styled.div``;

export interface ISection {
  id: string;
  label: string;
  icon?: JSX.Element;
  color?: string;
}

interface ISectionSelectorProps {
  sections: ISection[];
  defaultSection?: string;
}

const SectionSelectorC1: React.FC<ISectionSelectorProps> = ({ sections, defaultSection }) => {
  const { pathname } = useLocation();

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <SectionSelectionContainer>
        {sections.map((section) => (
          <Link to={section.id} key={section.id}>
            <SectionItem $isSelected={pathname.includes(section.id)} $color={section.color}>
              <div style={{ display: 'flex', gap: '.5rem', justifyContent: 'center', width: '100%' }}>
                {section.icon}
                <span>{section.label}</span>
              </div>
            </SectionItem>
          </Link>
        ))}
      </SectionSelectionContainer>
    </div>
  );
};

export default SectionSelectorC1;
