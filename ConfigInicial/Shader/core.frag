#version 330 core
uniform vec3 objcolor;

out vec4 color;

void main()
{
	color = vec4(objcolor, 1.0f);
}