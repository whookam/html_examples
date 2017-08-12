# Brief
The Coming soon website, is a placeholder site for a new product we are about to 
launch. We need a responsive websites with a "coming soon" message in the center 
of the page and countdown date under this. 

In the top left of the page we need the company name. This might change to a 
logo image later on, but we are waiting for the design for this, so in the mean 
time please just add some text here.

There needs to be a footer in the bottom left corner with a link back to the 
design.

## CSS Styles
These are a few of the CSS styles that are to be used.

#### Logo (header area)
```css
header {
    font-size: 24px;
}
```

#### Coming soon title
```css
.coming-soon h1 {
  line-height: 96px;
  font-size: 64px;
  animation: animatetop 0.4s;
}
```

#### Coming soon line
```css
.coming-soon hr {
  border-top: 1px solid #eee;
  width: 40%;
}
```

#### Coming soon days
```css
.coming-soon .countdown {
  font-size: 18px;
  line-height: 27px;
}
```

#### Footer
```css
footer {
  font-size: 15px;
  line-height: 1.5;
}
```

#### Animation
```css
@keyframes animatetop {
    0% {
        top: -300px;
        opacity: 0;
    }

    100% {
        top: 0;
        opacity: 1;
    }
}
```


## Files for this project
Included in this project is a image of the design and below are the fonts and 
images that you are expected to use. 

## Fonts used
Google web fonts: 
https://fonts.googleapis.com/css?family=Raleway

## Background image
https://www.w3schools.com/w3images/forestbridge.jpg

## helpful references
#### HTML HEAD Element
https://www.w3schools.com/html/html_head.asp

#### Google web fonts page
https://fonts.google.com/specimen/Raleway

#### CSS Background
https://www.w3schools.com/css/css_background.asp

#### CSS Centering things on the page
https://www.w3.org/Style/Examples/007/center.en.html

#### CSS Animation
https://www.w3schools.com/css/css3_animations.asp
