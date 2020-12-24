import { createAnimation } from '../../utils/animation/animation';

/**
 * Md Popover Leave Animation
 */
export const leaveAnimation = (baseEl: HTMLElement): any => {
    const baseAnimation = createAnimation();
    const wrapperAnimation = createAnimation();

    wrapperAnimation
        .addElement(baseEl.querySelector('.popover-wrapper')!)
        .fromTo('opacity', 0.99, 0);

    return baseAnimation
        .addElement(baseEl)
        .easing('ease')
        .duration(100)
        .addAnimation([wrapperAnimation]);
};
