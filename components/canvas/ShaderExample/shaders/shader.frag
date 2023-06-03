#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vUvs;

uniform vec2 resolution;
uniform float time;

uniform sampler2D noiseTexture;

#define M_PI 3.1415926535897932384626433832795
#define TWO_PI 6.28318530718

mat2 Rot(float a) {
float s=sin(a), c=cos(a);
return mat2(c, -s, s, c);
}

float inverseLerp(float v, float minValue, float maxValue) {
  return (v - minValue) / (maxValue - minValue);
}

float remap(float v, float inMin, float inMax, float outMin, float outMax) {
  float t = inverseLerp(v, inMin, inMax);
  return mix(outMin, outMax, t);
}

float random2d(vec2 pos){
  return fract(sin(dot(pos.xy, vec2(12.9898, 78.233)) / 0.9) * 43758.5453) / 7.0; // inner division is speed -> 10.0 fast -> 1.0 slow -> outer division is the opacity of the static noise -> 10.0 = low opacity -> 1.0 = high opacity
}

void main() {
    vec2 resolution = vec2(1278.0, 536.0);
    vec2 center = vUvs - 0.5;
    vec2 pos = center * resolution / 100.0;

    vec3 color = vec3(0.0);
    float grain = 0.0;

    grain = random2d(vec2(sin(pos)) * time);

    color = vec3(grain);

    gl_FragColor = vec4(color, 1.0);
}