"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { TagSelector } from "./tag-selector";
import {
  createAIRoleSchema,
  type CreateAIRoleFormData,
} from "@/lib/schemas/ai-role.schema";

interface CreateRoleFormProps {
  onSubmit: (data: CreateAIRoleFormData) => void;
  onCancel: () => void;
}

export function CreateRoleForm({ onSubmit, onCancel }: CreateRoleFormProps) {
  const form = useForm<CreateAIRoleFormData>({
    resolver: zodResolver(createAIRoleSchema),
    defaultValues: {
      name: "",
      description: "",
      tags: [],
      context: "",
      responseFormat: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Code Review Expert" {...field} />
              </FormControl>
              <FormDescription>
                Give your AI role a clear, descriptive name
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="e.g., Provides detailed code reviews with best practices, security considerations, and performance optimizations."
                  className="min-h-[100px] resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Brief description that will appear in the marketplace (10-500
                characters)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Tags */}
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tags</FormLabel>
              <FormControl>
                <TagSelector
                  value={field.value}
                  onChange={field.onChange}
                  error={form.formState.errors.tags?.message}
                />
              </FormControl>
              <FormDescription>
                Select 1-5 tags to help users find your AI role
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Context (System Prompt) */}
        <FormField
          control={form.control}
          name="context"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                Context (System Prompt)
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="size-5 p-0 hover:bg-transparent"
                    >
                      <Info className="size-4 text-muted-foreground" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80" align="start">
                    <div className="space-y-2">
                      <p className="font-semibold text-sm">Example:</p>
                      <p className="text-sm text-muted-foreground leading-relaxed font-mono bg-muted p-3 rounded-md">
                        "You are an expert code reviewer with 10+ years of
                        experience. You focus on best practices, security
                        vulnerabilities, and performance optimizations. Always
                        be constructive and provide specific examples with your
                        feedback."
                      </p>
                    </div>
                  </PopoverContent>
                </Popover>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="You are an expert in... Your role is to... Always focus on..."
                  className="min-h-[150px] resize-y font-mono text-sm"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is the system prompt that defines your AI role's behavior
                and expertise (20-2000 characters)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Response Format */}
        <FormField
          control={form.control}
          name="responseFormat"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                Response Format
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="size-5 p-0 hover:bg-transparent"
                    >
                      <Info className="size-4 text-muted-foreground" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80" align="start">
                    <div className="space-y-2">
                      <p className="font-semibold text-sm">Example:</p>
                      <p className="text-sm text-muted-foreground leading-relaxed font-mono bg-muted p-3 rounded-md whitespace-pre-wrap">
                        "Structure your responses as follows:
1. Summary - Brief overview of findings
2. Detailed Analysis - In-depth review with code examples
3. Recommendations - Specific actionable steps
4. Resources - Links to documentation or best practices"
                      </p>
                    </div>
                  </PopoverContent>
                </Popover>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Structure your responses with: 1. ..., 2. ..., 3. ..."
                  className="min-h-[120px] resize-y font-mono text-sm"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Define how the AI should structure its responses (10-1000
                characters)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Actions */}
        <div className="flex gap-3 justify-end pt-4 border-t">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">Create AI Role</Button>
        </div>
      </form>
    </Form>
  );
}
