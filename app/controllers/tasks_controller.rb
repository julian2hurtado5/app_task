class TasksController < ApplicationController
  def index
    @done =  Task.where(done: true)
    @to_do = Task.where(done: false)
  end

  def new
  end

  def show
  end

  def create
  end

  def delete
  end

  def update
    p "*" * 50
    p params
    @task = Task.find(params[:id])
    @task.done = !@task.done
    if @task.save
      respond_to do |format|
        format.json { render json: @task}
        format.js
      end
    end


  end

  def edit
  end
end
