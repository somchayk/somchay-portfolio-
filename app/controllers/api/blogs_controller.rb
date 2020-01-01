class Api::BlogsController < ApplicationController

def index
  render json: Blog.all
end

def create
  @blog = Blog.new(blog_params)
  if @blog.save
    render json: @blog  
  else
    render json: { errors: @blog.errors }, status: :unprocessable_entity
  end
end

def update
  @blog = Blog.find(params[:id])
  if @blog.update(blog_params)
    render json: @blog
  else
    render json: { errors: @blog.errors }, status: :unprocessable_entity
  end
end

def destroy 
  @blog = Blog.find(params[:id]).destroy
  render json: { message: 'Item Deleted'}
end

private
def blog_params
  params.require(:blog).permit( :title, :body)
end





end
