import {animate, state, style, transition, trigger} from "@angular/animations";

export const divTrigger = trigger('divTrigger', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(500, style({
      opacity: 1
    })),
    transition(':leave', animate(500, style({
      opacity: 0
    })))
  ])
]);

export const changeWidthTrigger = trigger('changeWidthTrigger',[
  transition('* => *', [
    animate(1000, style({
      height: '10px'
    })),
    animate(1000, style({
      height: '*'
    }))
  ])
])
