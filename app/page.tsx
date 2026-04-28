import Link from 'next/link'
import { getAllCourses } from '@/lib/courses'

export default function Home() {
  const courses = getAllCourses()

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Claude Code 实战课程
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          从零开始，掌握 Claude Code 的使用与架构
        </p>
        <div className="flex justify-center gap-4 text-sm text-gray-500">
          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">8 节课</span>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">动手实战</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">架构剖析</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {courses.map((course, index) => (
          <Link
            key={course.slug}
            href={`/courses/${course.slug}`}
            className="block p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-purple-300 hover:-translate-y-1 transition-all duration-200"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg text-lg font-bold shadow-sm">
                {index + 1}
              </span>
              <h2 className="text-lg font-semibold text-gray-900">
                {course.title}
              </h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {course.description}
            </p>
            <div className="mt-4 flex items-center text-purple-600 text-sm font-medium">
              开始学习 →
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="inline-block bg-gray-100 rounded-xl p-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">准备好开始了吗？</h3>
          <p className="text-gray-600 mb-4">从 Lesson 1 开始你的 Claude Code 学习之旅</p>
          <Link
            href="/courses/lesson1-basics"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
          >
            开始学习 Lesson 1
          </Link>
        </div>
      </div>
    </div>
  )
}
