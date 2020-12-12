#version 410 core
precision highp float;
out vec4 Color;
uniform float fTime;
uniform ivec2 iResolution;
void main()
{
    vec2 uv = (gl_FragCoord.xy-(.5*iResolution.xy))/iResolution.y;
    float d = abs(sin(uv.y+sin(uv.x*4.+fTime)*.2));
    d = 1.-smoothstep(.19,.2,d);
    Color=vec4(vec3(d),1.f);

}